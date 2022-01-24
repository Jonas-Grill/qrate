import {Bson, Request, State} from "../deps.ts";

const authMiddleware = async (
    {
        state,
        request,
    }: {
        state: State;
        request: Request;
    }, next: Function) => {

    console.log(request.headers);

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