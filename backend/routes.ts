import {Context, Router} from "./deps.ts";

const router = new Router();

router
    .get("/", (ctx: Context) => {
        ctx.response.body = "Welcome";
    })

router.routes();

export default router;
