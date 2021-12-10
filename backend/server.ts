import {Application} from "https://deno.land/x/oak@v10.0.0/mod.ts";
import {oakCors} from "https://deno.land/x/cors@v1.2.2/mod.ts";
import "https://deno.land/x/dotenv@v3.1.0/load.ts";
import router from "./routes.ts";
import {PORT} from "./config/config.ts";

const app = new Application();

app.use(
    oakCors({
        origin: [
            "http://localhost:5000",
        ],
        credentials: true,
    }),
);
app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", ({hostname, port, secure}) => {
    console.log(
        `Listening on: ${secure ? "https://" : "http://"}${hostname ??
        "localhost"}:${port}`,
    );
});

app.addEventListener("error", (evt) => {
    console.log(evt.error);
});

await app.listen({
    port: PORT,
    secure: false,
});
