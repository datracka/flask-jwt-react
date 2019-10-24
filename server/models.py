from . import db


class User(db.Model):

    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=True)
    email = db.Column(db.String(120), unique=True, nullable=True)
    token = db.Column(db.String(256), unique=True, nullable=False)

    def __init__(self, username, email, token):
        self.username = username
        self.email = email
        self.token = token

    def __repr__(self):
        return '<User %r>' % self.username
