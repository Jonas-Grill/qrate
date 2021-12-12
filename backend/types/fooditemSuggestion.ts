import FoodSchema from "./fooditem.ts";
export default interface FooditemSuggestionSchema {
    fooditem: FoodSchema;
    creator: string;
    upVotes: bigint;
    downVotes: bigint;
    rating: bigint;
};
