import FoodSchema from "./fooditem.ts";
import VoteSchema from "./vote.ts";
import {Bson} from "../deps.ts"

export default interface FooditemSuggestionSchema {
    _id: Bson.ObjectId;
    fooditem: FoodSchema;
    creator: string;
    votes: VoteSchema[];
    rating: number;
}
