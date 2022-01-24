import {MongoClient, sleep} from "../deps.ts";
import {DB_LINK} from "./config.ts"

const client = new MongoClient();

await sleep(10);

//Connecting to a Local Mongo Database
try {
    await client.connect(DB_LINK);
} catch (e) {
    await sleep(10);
    await client.connect(DB_LINK);
}


const db = client.database("qrate");

export default db;