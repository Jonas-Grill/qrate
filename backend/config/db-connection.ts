import {MongoClient, sleep} from "../deps.ts";
import {DB_LINK} from "./config.ts"

const client = new MongoClient();

await sleep(5)

//Connecting to a Local Mongo Database
await client.connect(DB_LINK);

const db = client.database("qrate");

export default db;