import {Algorithm} from "../deps.ts";

import "https://deno.land/x/dotenv@v3.1.0/load.ts";

const DENO_DIR = parseInt(Deno.env.get('DENO_DIR') || "/packages");
const PORT = parseInt(Deno.env.get('SERVER_PORT') || "8000");
const SECRET = Deno.env.get('SECRET') || "";
const JWT_ALG: Algorithm = "HS512";
const ENV = Deno.env.get('ENVIRONMENT') || "";
const DB_LINK = (ENV === "dev" ? Deno.env.get('DB_LINK_DEV') : Deno.env.get('DB_LINK_PROD')) || "";

export {
    DENO_DIR,
    PORT,
    SECRET,
    JWT_ALG,
    ENV,
    DB_LINK
};