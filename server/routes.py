from flask import Blueprint
from flask import make_response, render_template, request

blueprint = Blueprint('main', __name__)

# https://github.com/shea256/angular-flask/
@blueprint.route('/')
def basic_pages(**kwargs):
    return render_template('index.html')
