import {Algorithm} from "https://deno.land/x/djwt@v2.4/algorithm.ts";

const DENO_DIR = parseInt(Deno.env.get('DENO_DIR') || "/packages");
const PORT = parseInt(Deno.env.get('SERVER_PORT') || "8000");
const SECRET = Deno.env.get('SECRET') || "";
const JWT_ALG: Algorithm = "HS512";

export {
    DENO_DIR,
    PORT,
    SECRET,
    JWT_ALG
};