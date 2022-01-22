import {Context, Status, verify} from "../deps.ts";
import * as userService from "../services/userService.ts";
import {KEY} from "../config/config.ts";

const authMiddleware = async (ctx: Context, next: Function) => {
    const authHeader = ctx.request.headers.get("authorization");

    ctx.assert(!(authHeader === null), Status.Unauthorized, "Please authenticate yourself");

    const jwt: string[] = authHeader.split(" ");

    ctx.assert(jwt[0] === "Bearer", Status.BadRequest, "Wrong authorization method")

    try {
        // Validate JWT and if it is invalid delete from cookie
        const username: string | unknown = await verify(jwt[1], KEY).then(payload => payload.username);

        ctx.assert(typeof username === "string", Status.BadRequest, "JWT token is invalid");

        // If it is valid select user and save in context state
        ctx.state.currentUser = await userService.getUserByUsername(username);

        await next();
    } catch (err) {
        console.error(err);

        if (err instanceof TypeError) {
            ctx.state.currentUser = null;

            ctx.throw(Status.BadRequest, "JWT token is invalid");
        }

        if (err instanceof RangeError) {
            ctx.state.currentUser = null;

            ctx.throw(Status.BadRequest, "JWT token is expired");
        }

        ctx.response.status = 500;
        ctx.response.body = {
            success: false,
            msg: err.toString(),
        };
    }
};

export default authMiddleware;
