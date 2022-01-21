import {Context, isHttpError, Status} from "../deps.ts";

const errorHandlerMiddleware = async (ctx: Context, next: Function) => {
    try {
        await next();
    } catch (err) {
        console.log(err.stack);

        if (isHttpError(err)) {
            ctx.response.status = err.status;
            ctx.response.body = {msg: err.message};

            switch (err.status) {
                case Status.NotFound:
                    // handle NotFound
                    break;
                default:
                // handle other statuses
            }
        } else {
            ctx.response.status = 500;
            ctx.response.body = {msg: "Internal server error"};
        }
    }
}

export default errorHandlerMiddleware;