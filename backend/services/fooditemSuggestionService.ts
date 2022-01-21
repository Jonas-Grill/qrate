import * as fooditemSuggestionRepo from "../repositories/fooditemSuggestionRepo.ts";
import FooditemSuggestion from "../types/fooditemSuggestion.ts";
import Fooditem from "../types/fooditem.ts";
import invalidIdException from "../exceptions/invalidIdException.ts";
import User from "../types/user.ts";

export const createNewFooditemSuggestion = async (fooditem: Fooditem, user: User) => {
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
        userId: user._id.toString(),
        upVote: upVote,
    });

    fooditemSuggestion.rating = upVote ?
        (fooditemSuggestion.rating + user.userLevel.levelValue) : (fooditemSuggestion.rating + user.userLevel.levelValue);

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