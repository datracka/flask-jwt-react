import graphene


class Hello(graphene.Mutation):
    ok = graphene.Boolean()

    def mutate(self, root):
        ok = True
        return Hello(True)


class Mutation(graphene.ObjectType):
    hello = Hello.Field()
