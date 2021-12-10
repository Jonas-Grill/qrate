import {Context, Router} from "https://deno.land/x/oak@v10.0.0/mod.ts";
import {
    getUserData,
    login,
    registration,
} from "./controllers/userController.ts";
import authMiddleware from "./middleware/authMiddleware.ts";

const router = new Router();

router
    .get("/", (ctx: Context) => {
        ctx.response.body = "Welcome";
    })
    .post("/login", login)
    .post("/registration", registration)
    .use(authMiddleware)
    .get("/user", getUserData)

router.routes();

export default router;
