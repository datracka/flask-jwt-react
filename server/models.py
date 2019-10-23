
from server import create_app

db = create_app()


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String())
    email = db.Column(db.String())
    token = db.Column(db.String())

    def __init__(self, name, email, token):
        self.name = name
        self.email = email
        self.token = token

    def __repr__(self):
        return '<id {}>'.format(self.id)

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'token': self.token
        }
