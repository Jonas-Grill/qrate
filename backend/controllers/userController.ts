import {
    Cookies,
    Request,
    Response,
    State,
} from "https://deno.land/x/oak@v10.0.0/mod.ts";
import {
    create,
    getNumericDate,
    Header,
    Payload,
} from "https://deno.land/x/djwt@v2.4/mod.ts";
import {JWT_ALG, SECRET} from ".././config/config.ts";
import * as userService from "../services/userService.ts";
import User from "../types/user.ts";

export const login = async ({
                                request,
                                response,
                                cookies,
                            }: {
    request: Request;
    response: Response;
    cookies: Cookies;
}) => {
    if (!request.hasBody) {
        response.status = 400;
        response.body = {
            success: false,
            msg: "No Data",
        };
        return;
    }

    const userData = await request.body().value;

    if (!await userService.login(userData)) {
        response.status = 422;
        response.body = {
            success: false,
            msg: "Invalid username or password",
        };
        return;
    }

    const payload: Payload = {
        iss: userData.username,
        exp: getNumericDate(60 * 60 * 24),
    };

    // Create JWT and send it to user
    const jwt: string = await createToken(payload);

    if (jwt) {
        response.status = 200;
        response.body = {
            success: true,
            msg: "Login successful",
        };
        cookies.set("jwt", jwt, {sameSite: "none"});
    } else {
        response.status = 500;
        response.body = {
            success: false,
            msg: "Internal server error",
        };
    }

    return;
};

export const registration = async ({
                                       request,
                                       response,
                                   }: {
    request: Request;
    response: Response;
}) => {
    try {
        if (!request.hasBody) {
            response.status = 400;
            response.body = {
                success: false,
                msg: "No Data",
            };
            return;
        }

        const userData = await request.body().value;

        const user = await userService.createNewUser(
            userData,
        );

        if (!user) {
            response.status = 409;
            response.body = {
                success: false,
                msg: "There already is a user with that username",
            };
            return;
        }

        const data: User = user;

        response.status = 201;
        response.body = {
            success: true,
            data: {
                username: data.username,
            },
        };
    } catch (err) {
        if (err instanceof TypeError) {
            response.status = 400;
            response.body = {
                success: false,
                msg: "JWT token is invalid.",
            };
            return;
        }

        response.status = 500;
        response.body = {
            success: false,
            msg: err.toString(),
        };
    }
};

export const getUserData = ({
                                response,
                                state,
                            }: {
    response: Response;
    state: State;
}) => {
    const user: User = state.currentUser;

    user.password = "";

    response.status = 200;
    response.body = {
        success: true,
        data: user,
    };
};

const createToken = async (payload: Payload) => {
    const header: Header = {
        alg: JWT_ALG,
        typ: "JWT",
    };

    return await create(header, payload, SECRET);
};
