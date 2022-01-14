import {Context, Router} from "https://deno.land/x/oak@v10.0.0/mod.ts";

const router = new Router();

router
    .get("/", (ctx: Context) => {
        ctx.response.body = "Welcome";
    })

router.routes();

export default router;
