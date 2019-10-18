import graphene
import json
from collections import namedtuple

# stolen from https://stackoverflow.com/questions/6578986/how-to-convert-json-data-into-a-python-object/15882054#15882054


def _json_object_hook(d):
    return namedtuple('X', d.keys())(*d.values())


def json2obj(data):
    return json.loads(data, object_hook=_json_object_hook)


def hello_resolver(argument):
    return 'Hello ' + argument
