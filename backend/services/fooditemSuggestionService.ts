import * as fooditemSuggestionRepo from "../repositories/fooditemSuggestionRepo.ts";
import * as fooditemRepo from "../repositories/fooditemRepo.ts";
import FooditemSuggestion from "../types/fooditemSuggestion.ts";
import Fooditem from "../types/fooditem.ts";
import invalidIdException from "../exceptions/invalidIdException.ts";
import User from "../types/user.ts";
import InvalidDataException from "../exceptions/invalidDataException.ts";

export const createNewFooditemSuggestion = async (fooditem: Fooditem, user: User) => {
    for await (const barcode of fooditem.barcodes) {
        if (await fooditemRepo.getFooditemByBarcode(barcode)) {
            throw new InvalidDataException(`There already exists a fooditem with the barcode ${barcode}`);
        }
    }

    const fooditemSuggestion: FooditemSuggestion = {
        creator: user.username, fooditem: fooditem, rating: 0, votes: []
    };

    return await fooditemSuggestionRepo.getFooditemSuggestionById(await fooditemSuggestionRepo.createFooditemSuggestion(fooditemSuggestion));
}

export const getAllFooditemSuggestions = async () => {
    return await fooditemSuggestionRepo.getAllFooditemSuggestion();
}

export const getFooditemSuggestion = async (id: string) => {
    const fooditemSuggestion = await fooditemSuggestionRepo.getFooditemSuggestionById(id);

    if (!fooditemSuggestion) {
        throw new invalidIdException();
    }

    return fooditemSuggestion;
}

export const addVote = async (fooditemSuggestionId: string, upVote: boolean, user: User) => {
    const fooditemSuggestion: FooditemSuggestion | undefined = await fooditemSuggestionRepo.getFooditemSuggestionById(fooditemSuggestionId);

    if (!fooditemSuggestion) {
        throw new invalidIdException();
    }

    fooditemSuggestion.votes.push({
        username: user.username,
        upVote: upVote,
    });

    fooditemSuggestion.rating = upVote ?
        (fooditemSuggestion.rating + user.userLevel.levelValue) : (fooditemSuggestion.rating - user.userLevel.levelValue);

    const newFooditemSuggestion: FooditemSuggestion | undefined = await fooditemSuggestionRepo.updateFooditemSuggestion(fooditemSuggestion);

    if (!fooditemSuggestion) {
        throw new invalidIdException();
    }

    return newFooditemSuggestion;
}

export const getUpVoteCount = (fooditemSuggestion: FooditemSuggestion) => {
    return fooditemSuggestion.votes.filter((x) => x.upVote).length;
}

export const getDownVoteCount = (fooditemSuggestion: FooditemSuggestion) => {
    return fooditemSuggestion.votes.filter((x) => !x.upVote).length;
}