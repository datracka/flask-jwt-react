from oauthlib.oauth2 import WebApplicationClient
from flask import redirect
import os
import time
import json
import requests
import hashlib


# https://developers.google.com/identity/protocols/OpenIDConnect

# shows how to do a request to google Auth REST API (step 2 from document above)
# https://realpython.com/flask-google-login/
# https://github.com/realpython/materials/tree/master/flask-google-login


class GoogleJwt:
    client = None
    state = None
    nonce = None

    def __init__(self):
        self.client = WebApplicationClient(os.getenv('GOOGLE_CLIENT_ID'))
        self.state = hashlib.sha256(os.urandom(1024)).hexdigest()
        self.nonce = os.urandom(24)

    def get_google_provider_cfg(self):
        return requests.get(os.getenv('GOOGLE_DISCOVERY_URL')).json()

    def sign_in(self):
        google_provider_cfg = self.get_google_provider_cfg()
        authorization_endpoint = google_provider_cfg["authorization_endpoint"]

        # Use library to construct the request for Google login and provide
        # scopes that let you retrieve user's profile from Google
        request_uri = self.client.prepare_request_uri(
            authorization_endpoint,
            redirect_uri='https://localhost:5000/callback',  # should not be hardcoded
            scope=["openid", "email", "profile"],
        )
        # step 2 https://developers.google.com/identity/protocols/OpenIDConnect#sendauthrequest
        # https://accounts.google.com/o/oauth2/v2/auth?
        # response_type=code
        # client_id=940491102431-u598da1eenhcsj63ls27dfr0kfic0atj.apps.googleusercontent.com
        # redirect_uri=https%3A%2F%2Flocalhost%2Fcallback
        # scope=openid+email+profile
        # state = self.state
        # nonce = self.nonce
        # login_hint = '12345689' # is (subject) claim
        print(request_uri)
        try:
            response = requests.get(request_uri)
        except requests.exceptions.RequestException as e:
            print('error', e)

        # does not work comming from a graphql of course
        redirect(response)
