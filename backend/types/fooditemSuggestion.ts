import FoodSchema from "./fooditem.ts";

export default interface FooditemSuggestionSchema {
    _id: { $oid: string };
    fooditem: FoodSchema;
    creator: string;
    upVotes: number;
    downVotes: number;
    rating: number;
};
