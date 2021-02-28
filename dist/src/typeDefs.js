"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = apollo_server_express_1.gql `
  type Whale {
    id: ID!
    name: string!
  }
  
  type Query {
    hello: String
    getAll: [Whale]!
  }
  type Migration {
    create(name: string!) Whale
  }
`;
//# sourceMappingURL=typeDefs.js.map