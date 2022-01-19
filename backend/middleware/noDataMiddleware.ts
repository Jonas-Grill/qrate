import {Request, Response} from "../deps.ts";

const noDataMiddleware = async ({
                                    request,
                                    response,
                                }: {
    request: Request;
    response: Response;
    // deno-lint-ignore ban-types
}, next: Function) => {
    if (!request.hasBody) {
        response.status = 400;
        response.body = {
            success: false,
            msg: "No Data",
        };
        return;
    }

    await next();
};

export default noDataMiddleware;
