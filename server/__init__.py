
import os
import json
import graphene
import hashlib
from flask import Flask, render_template, request, redirect, send_from_directory, make_response, session
from flask.helpers import get_root_path
from flask_graphql import GraphQLView
from config import BaseConfig
from server.graphql.query import Query
from server.graphql.mutation import Mutation
from server.services.google_jwt import GoogleJwt
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__, static_url_path='')
app.secret_key = os.environ.get("SECRET_KEY") or os.urandom(24)


@app.before_request
def before_request():
    if not request.is_secure and app.env != "development":
        url = request.url.replace("http://", "https://", 1)
        code = 301
        return redirect(url, code=code)


###### routes ###########


@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'), 'favicon.ico', mimetype='image/vnd.microsoft.icon')


@app.route('/')
@app.route('/protected')
def client_pages(**kwargs):
    return render_template('index.html')


@app.route('/login')
def login():
    session['state'] = hashlib.sha256(os.urandom(1024)).hexdigest()
    google_jwt = GoogleJwt()
    response = google_jwt.login(request.base_url, session['state'])
    return response.text


@app.route('/login/callback')
def callback():
    if request.args.get('state', '') != session['state']:
        return 'Invalid state parameter.'
        response = make_response(json.dumps(
            'Invalid state parameter.'), 401)
        response.headers['Content-Type'] = 'application/json'
        return response
    google_jwt = GoogleJwt()
    jwt_token = google_jwt.callback(
        request.url, request.base_url, request.args, User)
    return redirect('/?token=' + jwt_token)

###### end routes #######


# add configuration
if os.getenv('FLASK_ENV') == 'development':
    app.config.from_object('config.DevelopmentConfig')
else:
    app.config.from_object('config.ProductionConfig')

# add graphQl(pending encapsulate!)
schema = graphene.Schema(query=Query, mutation=Mutation)

app.add_url_rule(
    '/graphql', view_func=GraphQLView.as_view('graphql', schema=schema, graphiql=os.environ["FLASK_ENV"] != 'production'))

db = SQLAlchemy(app)
migrate = Migrate(app, db)


# introspection_dict = schema.introspect()
# Print the schema in the console
# print(json.dumps(introspection_dict))

# Meta tags for viewport responsiveness
meta_viewport = {"name": "viewport",
                 "content": "width=device-width, initial-scale=1, shrink-to-fit=no"}

from server.models import User
# db.create_all()
