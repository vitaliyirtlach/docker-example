import { Whale } from "./entity/Whale";
export declare const resolvers: {
    Query: {
        hello: () => string;
        getAll: () => Promise<Whale[]>;
    };
    Mutations: {
        create(parent: any, { name }: {
            name: any;
        }, context: any): Promise<Whale>;
    };
};
