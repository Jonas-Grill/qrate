import {
    Cookies,
    Response,
    State,
} from "../deps.ts";
import {Payload, verify} from "../deps.ts";
import {JWT_ALG, SECRET} from "../config/config.ts";
import User from "../types/user.ts";
import * as userService from "../services/userService.ts";

const authMiddleware = async ({
                                  state,
                                  response,
                                  cookies,
                              }: {
    state: State;
    response: Response;
    cookies: Cookies;
}, next: Function) => {
    var username: string;

    try {
        // Get JWT from cookies
        const jwt = cookies.get("jwt");

        if (jwt) {
            try {
                // Validate JWT and if it is invalid delete from cookie
                const data: Payload = await verify(jwt, SECRET, JWT_ALG);

                if (!data.iss) {
                    response.status = 400;
                    response.body = {
                        success: false,
                        msg: "JWT token is invalid.",
                    };

                    return;
                } else {
                    username = data.iss;
                }

                // If it is valid select user and save in context state
                const user: User | undefined = await userService.getUserByUsername(
                    username,
                );

                state.currentUser = user;

                await next();
            } catch (err) {
                console.error(err);

                if (err instanceof TypeError) {
                    cookies.delete("jwt");
                    state.currentUser = null;

                    response.status = 400;
                    response.body = {
                        success: false,
                        msg: "JWT token is invalid.",
                    };
                    return;
                }

                if (err instanceof RangeError) {
                    state.currentUser = null;

                    response.status = 400;
                    response.body = {
                        success: false,
                        msg: "JWT token is expired.",
                    };
                    return;
                }

                response.status = 500;
                response.body = {
                    success: false,
                    msg: err.toString(),
                };
            }
        } else {
            response.status = 400;
            response.body = {
                success: false,
                msg: "JWT token is missing.",
            };
            state.currentUser = null;
        }
    } catch (err) {
        console.log(err);

        response.status = 500;
        response.body = {
            success: false,
            msg: err.toString(),
        };
    }
};

export default authMiddleware;
