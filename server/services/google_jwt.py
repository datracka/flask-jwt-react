from oauthlib.oauth2 import WebApplicationClient
import os
import time
import json
import requests
from google.auth import jwt


# https://developers.google.com/identity/protocols/OpenIDConnect

# shows how to do a request to google Auth REST API (step 2 from document above)
# https://realpython.com/flask-google-login/
# https://github.com/realpython/materials/tree/master/flask-google-login


class GoogleJwt:
    client = None
    nonce = None  # not used

    def __init__(self):
        self.client = WebApplicationClient(os.getenv('GOOGLE_CLIENT_ID'))
        self.discovery = requests.get(os.getenv('GOOGLE_DISCOVERY_URL')).json()
        self.nonce = os.urandom(24)

    def login(self, url, state):
        authorization_endpoint = self.discovery["authorization_endpoint"]
        # Use library to construct the request for Google login and provide
        # scopes that let you retrieve user's profile from Google
        request_uri = self.client.prepare_request_uri(
            authorization_endpoint,
            redirect_uri=f'{url}/callback',  # should not be hardcoded
            state=state,
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
        try:
            response = requests.get(request_uri)
        except requests.exceptions.RequestException as e:
            print('error', e)
        return response

    def callback(self, url, base_url, args):
        code = args.get('code')
        token_endpoint = self.discovery["token_endpoint"]
        token_url, headers, body = self.client.prepare_token_request(token_endpoint,
                                                                     code=code,
                                                                     authorization_response=url,
                                                                     redirect_url=base_url)
        try:
            token_response = requests.post(
                token_url,
                headers=headers,
                data=body,
                auth=(os.getenv('GOOGLE_CLIENT_ID'),
                      os.getenv('GOOGLE_CLIENT_SECRET'))
            )
        except requests.exceptions.RequestException as e:
            print('error', e)
        tokens_json = token_response.json()
        # jwt.decode(tokens_json['id_token'], verify=False)
        return tokens_json['id_token']
