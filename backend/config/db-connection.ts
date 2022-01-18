import {MongoClient} from "../deps.ts";
import {} from "./config.ts"

const client = new MongoClient();

//Connecting to a Mongo Atlas Database
await client.connect(
    `mongodb+srv://gaja:@buddy.ssoak.mongodb.net/?retryWrites=true&w=majority&authMechanism=SCRAM-SHA-1`,
);

const db = client.database("users");

export default db;