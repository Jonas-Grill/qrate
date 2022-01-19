import {MongoClient} from "../deps.ts";
import {DB_LINK} from "./config.ts"

const client = new MongoClient();

//Connecting to a Local Mongo Database
await client.connect(DB_LINK);

const db = client.database("users");

export default db;