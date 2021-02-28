"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs_1 = require("./typeDefs");
const resolvers_1 = require("./resolvers");
const typeorm_1 = require("typeorm");
(async () => {
    try {
        const server = new apollo_server_express_1.ApolloServer({ typeDefs: typeDefs_1.typeDefs, resolvers: resolvers_1.resolvers });
        const app = express_1.default();
        const PORT = process.env.PORT || 4000;
        server.applyMiddleware({ app });
        await typeorm_1.createConnection();
        app.listen(PORT, () => console.log(`http://localhost:${PORT}/graphql`));
    }
    catch (e) {
        console.log(e);
    }
})();
//# sourceMappingURL=index.js.map