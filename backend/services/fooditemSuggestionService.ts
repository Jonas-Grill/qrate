import * as fooditemSuggestionRepo from "../repositories/fooditemSuggestionRepo.ts";
import FooditemSuggestion from "../types/fooditemSuggestion.ts";
import invalidIdException from "../exceptions/invalidIdException.ts";
import User from "../types/user.ts";

export const createNewFooditemSuggestion = async (fooditemSuggestion: FooditemSuggestion, user: User) => {
    fooditemSuggestion.creator = user.username;

    return await fooditemSuggestionRepo.createFooditemSuggestion(fooditemSuggestion);
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

export const addVote = async (fooditemSuggestionId: string, upVote: boolean, userId: string, userLevel: number) => {
    const fooditemSuggestion: FooditemSuggestion = await fooditemSuggestionRepo.getFooditemSuggestionById(fooditemSuggestionId);

    if (!fooditemSuggestion) {
        throw new invalidIdException();
    }

    fooditemSuggestion.votes.push({
        userId: userId,
        upVote: upVote,
    });

    fooditemSuggestion.rating = upVote ? (fooditemSuggestion.rating + userLevel) : (fooditemSuggestion.rating + userLevel);

    const newFooditemSuggestion: FooditemSuggestion = await fooditemSuggestionRepo.updateFooditemSuggestion(fooditemSuggestion);

    if (!fooditemSuggestion) {
        throw new invalidIdException();
    }

    return newFooditemSuggestion;
}

export const getUpVoteCount = async (fooditemSuggestion: FooditemSuggestion) => {
    return fooditemSuggestion.votes.filter((x) => x.upVote).length;
}

export const getDownVoteCount = async (fooditemSuggestion: FooditemSuggestion) => {
    return fooditemSuggestion.votes.filter((x) => !x.upVote).length;
}