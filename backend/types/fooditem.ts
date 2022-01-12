import AllergenSchema from "./allergen.ts";

export default interface FooditemSchema {
    _id: { $oid: string };
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
    barcode: string[];
}