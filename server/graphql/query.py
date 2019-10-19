
import graphene

from server.graphql.types import User
from server.graphql.resolvers import hello_resolver, sign_in_resolver


class Query(graphene.ObjectType):

    hello = graphene.String(argument=graphene.String(default_value="stranger"))

    sign_in = graphene.Field(User)

    def resolve_hello(self, info, argument):
        return hello_resolver(argument)

    def resolve_sign_in(self, info):
        return sign_in_resolver()
