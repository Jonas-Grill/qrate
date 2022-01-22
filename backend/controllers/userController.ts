import {create, getNumericDate, Header, Payload, Request, Response, State, Status,} from "../deps.ts";
import {KEY, SIGN_ALG} from ".././config/config.ts";
import * as userService from "../services/userService.ts";
import User from "../types/user.ts";

export const registration = async (
    ctx: {
        request: Request;
        response: Response;
        assert: Function;
    }) => {

    ctx.assert(ctx.request.hasBody, Status.BadRequest, "Please provide data");

    const userData = await ctx.request.body().value;

    ctx.assert(userData, Status.BadRequest, "Please provide data");
    ctx.assert('username' in userData, Status.BadRequest, "Please provide a username");
    ctx.assert('password' in userData, Status.BadRequest, "Please provide a password");
    ctx.assert('eMail' in userData, Status.BadRequest, "Please provide an email");

    await userService.createNewUser(userData);

    ctx.response.status = Status.Created;
}

export const login = async (
    ctx: {
        request: Request;
        response: Response;
        assert: Function;
    }) => {
    ctx.assert(ctx.request.hasBody, Status.BadRequest, "Please provide data");

    const userData = await ctx.request.body().value;

    ctx.assert(userData, Status.BadRequest, "Please provide data");
    ctx.assert('username' in userData, Status.BadRequest, "Please provide a username");
    ctx.assert('password' in userData, Status.BadRequest, "Please provide a password");

    if (!await userService.isUserDataValid(userData)) {
        ctx.response.status = Status.BadRequest;
        ctx.response.body = {
            msg: "Invalid username or password",
        };
        return;
    }

    const payload: Payload = {
        username: userData.username,
        exp: getNumericDate(60 * 60 * 24),
    };

    // Create JWT and send it to user
    const jwt: string = await createToken(payload);

    if (jwt) {
        ctx.response.status = Status.OK;
        ctx.response.body = {
            token: jwt,
        };
    } else {
        ctx.response.status = Status.InternalServerError;
        ctx.response.body = {
            msg: "Internal server error",
        };
    }
}


export const getUserData = async (
    ctx: {
        request: Request;
        response: Response;
        state: State;
        params: any;
    }) => {

    const username = ctx.request.url.searchParams.get('username');

    if (username) {
        const user: User = await userService.getUserByUsername(username);

        ctx.response.status = Status.Created;
        ctx.response.body = {
            username: user.username,
            userLevel: user.userLevel,
        };
    } else {
        const user: User = ctx.state.currentUser;

        ctx.response.status = Status.Created;
        ctx.response.body = {
            username: user.username,
            eMail: user.eMail,
            userLevel: user.userLevel,
            allergens: user.allergens,
            diet: user.diet,
        };
    }
};

const createToken = async (payload: Payload) => {
    const header: Header = {
        alg: SIGN_ALG,
        typ: "JWT",
    };

    return await create(header, payload, KEY);
};
