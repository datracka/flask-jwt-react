import os
import json
import graphene
from flask import Flask, render_template, request, redirect, send_from_directory
from flask.helpers import get_root_path
from flask_graphql import GraphQLView
from config import BaseConfig
from server import routes
from server.graphql.query import Query
from server.graphql.mutation import Mutation


def create_app():
    app = Flask(__name__, static_url_path='')
    @app.before_request
    def before_request():
        if not request.is_secure and app.env != "development":
            url = request.url.replace("http://", "https://", 1)
            code = 301
            return redirect(url, code=code)

    @app.route('/favicon.ico')
    def favicon():
        return send_from_directory(os.path.join(app.root_path, 'static'), 'favicon.ico', mimetype='image/vnd.microsoft.icon')

    dirname = os.path.dirname(__file__)

    # add configuration
    if os.getenv('FLASK_ENV') == 'development':
        app.config.from_object('config.DevelopmentConfig')
    else:
        app.config.from_object('config.ProductionConfig')

    # add graphQl(pending encapsulate!)
    schema = graphene.Schema(query=Query, mutation=Mutation)

    app.add_url_rule(
        '/graphql', view_func=GraphQLView.as_view('graphql', schema=schema, graphiql=os.environ["FLASK_ENV"] != 'production'))

    introspection_dict = schema.introspect()

    # Print the schema in the console
    # print(json.dumps(introspection_dict))

    # Meta tags for viewport responsiveness
    meta_viewport = {"name": "viewport",
                     "content": "width=device-width, initial-scale=1, shrink-to-fit=no"}

    # add routes
    app.register_blueprint(routes.blueprint)
    return app
