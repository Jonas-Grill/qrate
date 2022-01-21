import * as fooditemRepo from "../repositories/fooditemRepo.ts";
import Fooditem from "../types/fooditem.ts";
import invalidIdException from "../exceptions/invalidIdException.ts";
import User from "../types/user.ts";
import FooditemSchema from "../types/fooditem.ts";
import AllergenSchema from "../types/allergen.ts";

export const createNewFooditem = async (fooditem: Fooditem) => {
    fooditem.name = fooditem.name;
    fooditem.pictures = fooditem.pictures;
    fooditem.allergens = fooditem.allergens;
    fooditem.nutritionScore = fooditem.nutritionScore;
    fooditem.diet = fooditem.diet;
    fooditem.barcodes = fooditem.barcodes;

    return await fooditemRepo.createFooditem(fooditem);
}

export const getAllFooditem = async () => {
    return await fooditemRepo.getAllFooditem();
}

export const getFooditem = async (id: string) => {
    const fooditem = await fooditemRepo.getFooditemById(id);

    if (!fooditem) {
        throw new invalidIdException();
    }

    return fooditem;
}
