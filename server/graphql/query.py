
import graphene
from server.graphql.resolvers import hello_resolver


class Query(graphene.ObjectType):

    hello = graphene.String(argument=graphene.String(default_value="stranger"))

    def resolve_hello(self, info, argument):
        return hello_resolver(argument)
