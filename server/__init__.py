
import os
import json
import hashlib
from flask import Flask, render_template, request, redirect, send_from_directory, make_response, session
from flask.helpers import get_root_path
from config import BaseConfig
from server import routes

from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__, static_url_path='')
app.secret_key = os.environ.get("SECRET_KEY") or os.urandom(24)

app.config['JWT_SECRET_KEY'] = os.environ.get("JWT_SECRET_KEY") or os.urandom(24)

@app.before_request
def before_request():
    if not request.is_secure and app.env != "development":
        url = request.url.replace("http://", "https://", 1)
        code = 301
        return redirect(url, code=code)

# add configuration
if os.getenv('FLASK_ENV') == 'development':
    app.config.from_object('config.DevelopmentConfig')
else:
    app.config.from_object('config.ProductionConfig')

# Meta tags for viewport responsiveness
meta_viewport = {"name": "viewport",
                 "content": "width=device-width, initial-scale=1, shrink-to-fit=no"}

db = SQLAlchemy(app)
migrate = Migrate(app, db)
from server import models

app.register_blueprint(routes.blueprint)