import { Whale } from "./entity/Whale";

export const resolvers = {
    Query: {
      hello: () => '🐳 Hello Docker!',
      getAll: async () => await Whale.find()
    },
    Mutation: {
      async create(parent, {name}, context) {
        const whale = new Whale()
        whale.name = name
        await whale.save()
        return whale
      }     
    }
}