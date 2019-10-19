# TODO

## FIRST 

- [DONE] Understand JWT http://polyglot.ninja/understanding-jwt-json-web-tokens/
- [DONE PARTIALLY] Understand the role of flask-jwt-simple
- [DONE PARTIALLY] Understand Google OIDC ttps://developers.google.com/identity/protocols/OpenIDConnect

## THEN (it can change when I get more understanding)

- [DONE] ADD SSL
- [DOING] Create a JWT token using google OIDC as auth provider in google_jwt.py using https://developers.google.com/identity/protocols/OpenIDConnect.

>> Current Status: Step 3. Initial Auth request is done. Google Auth screen popups and redirect to login/callback. 
>> NEXT login/callback route should delegate in google_jwt.callback() method and vcalidate do steps 3 and 4.
>> PROBLEM: I don't know how to get query string parameters returned by google. Maybe blueprint is not the best solution. --> https://localhost:5000/login/callback?code=4/sQGx35giptXmLzr6l5RjntR5if2NtTP9bI4FC4DxJl9DnOftqXl0zHc_u34BFxfu39if5hCdmrpCUO96kdJpOWI&scope=email+profile+openid+https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/userinfo.profile&authuser=0&session_state=6d09768b063cbfc7fec046c189362e24d7c0bc1f..bfc6&prompt=consent 
  
- Create an endpoint to trigger login
  - client routing (trigger a graphql request to the server)
  - server routing
- Define routing flow
  - /login graphQL query
    - no params
    - It creates jwt token by calling google auth
    - payload google JWT TOKEN 
    - IMPORTANT!! -> Redirect URL how we manage it?
    - client side store token in local storage
    - redirect to protected route /network-graph (clientside protected route verify token is created in local storage)
  -  All subsequents graphQL request will have JWT as header
  -  graphql Server will check token validity
  -  clientside protected routes verify token is created in local storage