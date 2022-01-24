import * as fooditemRepo from "../repositories/fooditemRepo.ts";
import Fooditem from "../types/fooditem.ts";
import invalidIdException from "../exceptions/invalidIdException.ts";
import InvalidDataException from "../exceptions/invalidDataException.ts";
import invalidDataException from "../exceptions/invalidDataException.ts";

export const createNewFooditem = async (fooditem: Fooditem) => {
    for await (const barcode of fooditem.barcodes) {
        if (await fooditemRepo.getFooditemByBarcode(barcode)) {
            throw new InvalidDataException(`There already exists a fooditem with the barcode ${barcode}`);
        }
    }

    return fooditemRepo.getFooditemById(await fooditemRepo.createFooditem(fooditem));
}

export const getAllFooditems = async () => {
    return await fooditemRepo.getAllFooditems();
}

export const getFooditemById = async (id: string) => {
    const fooditem = await fooditemRepo.getFooditemById(id);

    if (!fooditem) {
        throw new invalidIdException();
    }

    return fooditem;
}

export const getFooditemByBarcode = async (barcode: string) => {
    const fooditem = await fooditemRepo.getFooditemByBarcode(barcode);

    if (!fooditem) {
        throw new InvalidDataException(`There is no fooditem with the barcode ${barcode}`);
    }

    return fooditem;
}
