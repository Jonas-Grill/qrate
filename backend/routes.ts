import {Router, Status} from "./deps.ts";
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.ts";
import {
    addVote,
    createFooditemSuggestion,
    getAllFooditemSuggestions,
    getOneFooditemSuggestion
} from "./controllers/fooditemSuggestionController.ts";
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
            "Gluten", "Laktose", "Soybeans", "Peanuts", "Eggs", "Fish", "Shellfish", "Tree nuts",
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
    .get("/fooditems", (ctx) => {
        ctx.response.status = Status.OK;
        ctx.response.body = [
            {
                _id: "611d5cd230dd29fc60df7b94",
                name: "Banana Smoothie",
                pictures: [
                    "Pictures nicht mockbar"
                ],
                allergens: [
                    {
                        name: "Laktose",
                        tracesOf: true,
                    },
                    {
                        name: "Milchzucker",
                        tracesOf: false,
                    },
                ],
                nutritionScore: {
                    calories: 71,
                    fat: 1.5,
                    carbs: 14.0,
                    sugar: 13.0,
                    protein: 0.8,
                    salt: 0.0,
                },
                diet: "Vegetarisch",
                barcodes: [
                    "4311536966101",
                    "4311536646405",
                    "8985230394409",
                ],
            },
            {
                _id: "611d5cd230dd29fc60df7b94",
                name: "Smoothie",
                pictures: [
                    "Pictures nicht mockbar"
                ],
                allergens: [
                    {
                        name: "Laktose",
                        tracesOf: true,
                    },
                    {
                        name: "Milchzucker",
                        tracesOf: false,
                    },
                ],
                nutritionScore: {
                    calories: 71,
                    fat: 1.5,
                    carbs: 14.0,
                    sugar: 13.0,
                    protein: 0.8,
                    salt: 0.0,
                },
                diet: "Vegetarisch",
                barcodes: [
                    "4311536966101",
                    "4311536646405",
                    "8985230394409",
                ],
            },
            {
                _id: "611d5cd230dd29fc60df7b94",
                name: "Banana",
                pictures: [
                    "Pictures nicht mockbar"
                ],
                allergens: [
                    {
                        name: "Laktose",
                        tracesOf: true,
                    },
                    {
                        name: "Milchzucker",
                        tracesOf: false,
                    },
                ],
                nutritionScore: {
                    calories: 71,
                    fat: 1.5,
                    carbs: 14.0,
                    sugar: 13.0,
                    protein: 0.8,
                    salt: 0.0,
                },
                diet: "Vegetarisch",
                barcodes: [
                    "4311536966101",
                    "4311536646405",
                    "8985230394409",
                ],
            }
        ];
    })
    .get("/fooditems/:id", (ctx) => {
        ctx.response.status = Status.OK;
        ctx.response.body = {
            _id: ctx.params.id,
            name: "Banana Smoothie",
            pictures: [
                "Pictures nicht mockbar"
            ],
            allergens: [
                {
                    name: "Laktose",
                    tracesOf: true,
                },
                {
                    name: "Milchzucker",
                    tracesOf: false,
                },
            ],
            nutritionScore: {
                calories: 71,
                fat: 1.5,
                carbs: 14.0,
                sugar: 13.0,
                protein: 0.8,
                salt: 0.0,
            },
            diet: "Vegetarisch",
            barcodes: [
                "4311536966101",
                "4311536646405",
                "8985230394409",
            ],
        };
    })
    // fooditemSuggestions
    .get("/fooditemsSuggestions", getAllFooditemSuggestions)
    .get("/fooditemsSuggestions/:id", getOneFooditemSuggestion)
    .post("/fooditemsSuggestions", createFooditemSuggestion)
    .post("/fooditemsSuggestions/:id", addVote)

router.routes();

export default router;
