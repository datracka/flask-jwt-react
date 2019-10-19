from oauthlib.oauth2 import WebApplicationClient
import os
import time
import json
import requests


# https://developers.google.com/identity/protocols/OpenIDConnect

# shows how to do a request to google Auth REST API (step 2 from document above)
# https://realpython.com/flask-google-login/
# https://github.com/realpython/materials/tree/master/flask-google-login


class GoogleJwt:
    client = None

    def __init__(self):
        self.client = WebApplicationClient(os.getenv('GOOGLE_CLIENT_ID'))
        print('###', self.client)

    def get_google_provider_cfg(self):
        return requests.get(os.getenv('GOOGLE_DISCOVERY_URL')).json()

    def sign_in(self):
        google_provider_cfg = self.get_google_provider_cfg()
        authorization_endpoint = google_provider_cfg["authorization_endpoint"]

        # Use library to construct the request for Google login and provide
        # scopes that let you retrieve user's profile from Google
        request_uri = self.client.prepare_request_uri(
            authorization_endpoint,
            redirect_uri='https://localhost/callback',
            scope=["openid", "email", "profile"],
        )
        print('#', request_uri)
        return 'YXYXYXY'
