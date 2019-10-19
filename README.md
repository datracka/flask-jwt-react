## Enable SSL 

- you are using `pyopenssl` (it should be already installed)
- create your own certificates on the root of the project `flask run --cert=cert.pem --key=key.pem`
- Browser will complain about it: To allow browser to access run `chrome://flags/#allow-insecure-localhost` and `enable`  it (tested in Chrome and brave)