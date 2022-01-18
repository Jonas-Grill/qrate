import {Router, Status} from "./deps.ts";

const router = new Router();

router
    .get("/", (ctx) => {
        ctx.response.body = "Welcome";
    })
    // users
    .get("/users", (ctx) => {
        ctx.response.status = Status.OK;
        ctx.response.body = {
            _id: {$oid: "2384339230003240"},
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
    .post("/users", (ctx) => {
        ctx.response.status = Status.Created;
    })
    .put("/users", (ctx) => {
        ctx.response.status = Status.OK;
        ctx.response.body = {
            _id: {$oid: "2384339230003240"},
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
                _id: {$oid: "611d5cd230dd29fc60df7b94"},
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
                _id: {$oid: "611d5cd230dd29fc60df7b94"},
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
                _id: {$oid: "611d5cd230dd29fc60df7b94"},
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
            _id: {$oid: ctx.params.id},
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
    .post("/fooditems", (ctx) => {
        ctx.response.status = Status.Created;
        ctx.response.body = {
            _id: {$oid: "611d5cd230dd29fc60df7b94"},
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
    .get("/fooditemsSuggestions", (ctx) => {
        ctx.response.status = Status.OK;
        ctx.response.body = [
            {
                _id: {$oid: "611d5cd230dd29fc60df7b94"},
                fooditem: {
                    _id: {$oid: "f0ujf098f90sdifaKVDSF"},
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
                creator: "Gina",
                upVotes: 4,
                downVotes: 1,
                rating: 4,
            },
            {
                _id: {$oid: "611d5cd230dd29fc60df7b94"},
                fooditem: {
                    _id: {$oid: "f0ujf098f90sdifaKVDSF"},
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
                },
                creator: "Gina",
                upVotes: 40,
                downVotes: 28,
                rating: 12,
            },
            {
                _id: {$oid: "611d5cd230dd29fc60df7b94"},
                fooditem: {
                    _id: {$oid: "f0ujf098f90sdifaKVDSF"},
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
                creator: "Gina",
                upVotes: 10,
                downVotes: 8,
                rating: 3,
            }
        ];
    })
    .get("/fooditemsSuggestions/:id", (ctx) => {
        ctx.response.status = Status.OK;
        ctx.response.body = {
            _id: {$oid: ctx.params.id},
            fooditem: {
                _id: {$oid: "f0ujf098f90sdifaKVDSF"},
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
            creator: "Gina",
            upVotes: 4,
            downVotes: 1,
            rating: 4,
        };
    })
    .post("/fooditemsSuggestions", (ctx) => {
        ctx.response.status = Status.Created;
        ctx.response.body = {
            _id: {$oid: "611d5cd230dd29fc60df7b94"},
            fooditem: {
                _id: {$oid: "f0ujf098f90sdifaKVDSF"},
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
            creator: "Gina",
            upVotes: 4,
            downVotes: 1,
            rating: 4,
        };
    })
    .post("/fooditemsSuggestions", (ctx) => {
        ctx.response.status = Status.OK;
    })

router.routes();

export default router;
