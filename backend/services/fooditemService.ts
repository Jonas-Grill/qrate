import * as fooditemRepo from "../repositories/fooditemRepo.ts";
import Fooditem from "../types/fooditem.ts";
import invalidIdException from "../exceptions/invalidIdException.ts";

export const createNewFooditem = async (fooditem: Fooditem) => {
    return fooditemRepo.getFooditemById(await fooditemRepo.createFooditem(fooditem));
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
