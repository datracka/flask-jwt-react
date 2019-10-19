from flask import Blueprint
from server.services.google_jwt import GoogleJwt
from flask import make_response, render_template, request, redirect

blueprint = Blueprint('main', __name__)

# Client routes...
# https://github.com/shea256/angular-flask/
@blueprint.route('/')
@blueprint.route('/test')
def client_pages(**kwargs):
    return render_template('index.html')


@blueprint.route('/login')
def login(**kwargs):
    response = google_jwt.login()
    print('response', response)
    return response.text


@blueprint.route('/login/callback')
def callback(**kwargs):
    print('login/callback', kwargs)
    pass
