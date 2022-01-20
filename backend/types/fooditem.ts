import AllergenSchema from "./allergen.ts";
import {Bson} from "../deps.ts"

export default interface FooditemSchema {
    _id: Bson.ObjectId;
    name: string;
    pictures: [];
    allergens: AllergenSchema[];
    nutritionScore: {
       calories: number,
       fat: number,
       carbs: number,
       sugar: number,
       protein: number,
       salt: number
    };
    diet: string;
    barcodes: string[];
}