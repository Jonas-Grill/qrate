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
import authMiddleware from "./middleware/authMiddleware.ts";
import {getUserData, login, registration} from "./controllers/userController.ts";

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
    .get("/fooditems", getAllFooditems)
    .get("/fooditemSuggestions", getAllFooditemSuggestions)
    .post("/users", registration)
    .post("/login", login)
    .get("/fooditems/:id", getOneFooditem)
    .get("/fooditemSuggestions/:id", getOneFooditemSuggestion)
    .use(authMiddleware)
    .get("/users", getUserData)
    .post("/fooditems", createFooditem)
    .post("/fooditemSuggestions", createFooditemSuggestion)
    .post("/fooditemSuggestions/:id", addVote)
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

router.routes();

export default router;
