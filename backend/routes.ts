import {Router, Status} from "./deps.ts";
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.ts";
import {
    addVote,
    createFooditemSuggestion,
    getAllFooditemSuggestions,
    getOneFooditemSuggestion
} from "./controllers/fooditemSuggestionController.ts";
import {
    getAllFooditems,
    getOneFooditem,
    createFooditem
} from "./controllers/fooditemController.ts";
import mockUserMiddleware from "./middleware/mockUserMiddleware.ts";

const router = new Router();

router
    .use(errorHandlerMiddleware)
    .get("/", (ctx) => {
        ctx.response.body = "Welcome";
    })
    .get("/allergens", (ctx) => {
        ctx.response.status = Status.OK;
        ctx.response.body = [
            "Gluten", "Laktose", "Sojabohnen", "Erdnüsse", "Ei", "Fisch", "Meeresfrüchte", "Nüsse",
        ];
    })
    .get("/diets", (ctx) => {
        ctx.response.status = Status.OK;
        ctx.response.body = [
            "Vegan", "Vegetarisch", "Pescetarisch", "Frutarisch",
        ];
    })
    .use(mockUserMiddleware)
    // users
    .get("/users", (ctx) => {
        ctx.response.status = Status.OK;
        ctx.response.body = {
            _id: "2384339230003240",
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
    })
    .post("/users", (ctx) => {
        ctx.response.status = Status.Created;
    })
    .put("/users", (ctx) => {
        ctx.response.status = Status.OK;
        ctx.response.body = {
            _id: "2384339230003240",
            username: "Gina",
            eMail: "alex.salzmann@web.de",
            userLevel: {
                levelName: "Kadett",
                levelValue: "2",
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
    })
    // login
    .post("/login", (ctx) => {
        ctx.response.status = Status.OK;
        ctx.response.body = {
            token: "534t9ijg9834eguiv0ß98ww4e05rk"
        };
    })
    // fooditems
    .get("/fooditems", getAllFooditems)
    .get("/fooditems/:id", getOneFooditem)
    .post("/fooditems", createFooditem)
    // fooditemSuggestions
    .get("/fooditemSuggestions", getAllFooditemSuggestions)
    .get("/fooditemSuggestions/:id", getOneFooditemSuggestion)
    .post("/fooditemSuggestions", createFooditemSuggestion)
    .post("/fooditemSuggestions/:id", addVote)

router.routes();

export default router;
