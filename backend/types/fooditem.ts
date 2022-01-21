import AllergenSchema, {instanceOfAllergen} from "./allergen.ts";
import {Bson} from "../deps.ts"

export default interface FooditemSchema {
    _id?: Bson.ObjectId;
    name: string;
    pictures?: [];
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

export const instanceOfFooditem = (object: any): object is FooditemSchema => {
    return 'name' in object
        && 'allergens' in object && instanceOfAllergen(object.allergens[0])
        && 'nutritionScore' in object
        && 'calories' in object.nutritionScore
        && 'fat' in object.nutritionScore
        && 'carbs' in object.nutritionScore
        && 'sugar' in object.nutritionScore
        && 'protein' in object.nutritionScore
        && 'salt' in object.nutritionScore
        && 'diet' in object
        && 'barcodes' in object;
}