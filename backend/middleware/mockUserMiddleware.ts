import {State} from "https://deno.land/x/oak@v10.0.0/application.ts";
import User from "../types/user.ts";
import {Bson} from "../deps.ts";

const authMiddleware = async (
    {
        state,
    }: {
        state: State;
    }, next: Function) => {

    state.currentUser = {
        _id: new Bson.ObjectId(),
        username: "Gina",
        eMail: "alex.salzmann@web.de",
        userLevel: {
            levelName: "Kadett",
            levelValue: 2,
            exp: 2439,
        },
        allergens: [
            {
                name: "Laktose",
                tracesOf: true,
            },
            {
                name: "Milchzucker",
                tracesOf: false,
            },
            {
                name: "Gluten",
                tracesOf: false,
            },
        ],
        diet: "Vegetarisch",
    };

    await next();
};

export default authMiddleware;