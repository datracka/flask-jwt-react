import graphene
import json
from collections import namedtuple
from server.services.google_jwt import GoogleJwt
from server.graphql.types import User

# stolen from https://stackoverflow.com/questions/6578986/how-to-convert-json-data-into-a-python-object/15882054#15882054


def _json_object_hook(d):
    return namedtuple('X', d.keys())(*d.values())


def json2obj(data):
    return json.loads(data, object_hook=_json_object_hook)


def hello_resolver(argument):
    return 'Hello ' + argument


def sign_in_resolver():
    google_jwt = GoogleJwt()
    token = google_jwt.sign_in()
    return User(token=token)
