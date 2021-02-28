"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const Whale_1 = require("./entity/Whale");
exports.resolvers = {
    Query: {
        hello: () => '🐳 Hello Docker!',
        getAll: async () => await Whale_1.Whale.find()
    },
    Mutations: {
        async create(parent, { name }, context) {
            const whale = new Whale_1.Whale();
            whale.name = name;
            await whale.save();
            return whale;
        }
    }
};
//# sourceMappingURL=resolvers.js.map