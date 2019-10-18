import graphene


class User(graphene.ObjectType):
    token = graphene.String()
