import FoodSchema, {instanceOfFooditem} from "./fooditem.ts";
import VoteSchema from "./vote.ts";
import {Bson} from "../deps.ts"
import {instanceOfAllergen} from "./allergen.ts";
import FooditemSchema from "./fooditem.ts";

export default interface FooditemSuggestionSchema {
    _id?: Bson.ObjectId;
    fooditem: FoodSchema;
    creator: string;
    votes: VoteSchema[];
    rating: number;
}

export const instanceOfFooditemSuggestion = (object: any): object is FooditemSuggestionSchema => {
    return 'fooditem' in object && instanceOfFooditem(object)
        && 'creator' in object
        && 'votes' in object
        && 'rating' in object;
}
