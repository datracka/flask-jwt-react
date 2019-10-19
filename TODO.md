# TODO

## FIRST 

- [DONE] Understand JWT http://polyglot.ninja/understanding-jwt-json-web-tokens/
- [DONE PARTIALLY] Understand the role of flask-jwt-simple
- [DONE PARTIALLY] Understand Google OIDC ttps://developers.google.com/identity/protocols/OpenIDConnect

## THEN (it can change when I get more understanding)

- [DONE] ADD SSL
- [DOING] Create a JWT token using google OIDC as auth provider in google_jwt.py using https://developers.google.com/identity/protocols/OpenIDConnect. I AM IN STEP 2 (see gloogle_jwt.py)

>> Current Status: I do the request in step 2 and the result is a Page to be shown.
>> But I am in an AJAX (graphql) query!! I can not redirect coming 
>> from this kind of request...
>> Solution 1: Trigger can be a proper server path /login
>> Solution 2: No se me ocurre :D :D (I think everything will have to have server side driven....)
  
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