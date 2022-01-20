import FoodSchema from "./fooditem.ts";
import {Bson} from "../deps.ts"

export default interface FooditemSuggestionSchema {
    _id: Bson.ObjectId;
    fooditem: FoodSchema;
    creator: string;
    upVotes: number;
    downVotes: number;
    rating: number;
};
