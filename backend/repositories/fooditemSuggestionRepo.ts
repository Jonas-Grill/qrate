import db from '../config/db-connection.ts';
import FooditemSuggestion from "../types/fooditemSuggestion.ts";
import {Bson} from "../deps.ts";
import InvalidIdException from "../exceptions/invalidIdException.ts";

const fooditemsSuggestions = db.collection<FooditemSuggestion>("fooditemSuggestions");

export const createFooditemSuggestion = async (fooditemSuggestion: FooditemSuggestion) => {
    const id = await fooditemsSuggestions.insertOne({
        fooditem: fooditemSuggestion.fooditem,
        creator: fooditemSuggestion.creator,
        upVotes: fooditemSuggestion.upVotes,
        downVotes: fooditemSuggestion.downVotes,
        rating: fooditemSuggestion.rating,
    });

    return id.toString();
};

export const getAllFooditemSuggestion = async () => {
    return await fooditemsSuggestions.find({creator: {$ne: null}}).toArray();
};

export const getFooditemSuggestionById = async (id: string) => {
    if (!Bson.ObjectId.isValid(id)) {
        throw new InvalidIdException();
    }

    return await fooditemsSuggestions.findOne({
        _id: new Bson.ObjectId(id),
    });
};

export const updateFooditemSuggestion = async (fooditemSuggestion: FooditemSuggestion) => {
    if (!Bson.ObjectId.isValid(fooditemSuggestion._id.id)) {
        throw new InvalidIdException();
    }

    await fooditemsSuggestions.updateOne(
        {
            _id: new Bson.ObjectId(fooditemSuggestion._id.id),
        },
        {
            fooditem: fooditemSuggestion.fooditem,
            upVotes: fooditemSuggestion.upVotes,
            downVotes: fooditemSuggestion.downVotes,
            rating: fooditemSuggestion.rating,
        },
    );

    return await getFooditemSuggestionById(fooditemSuggestion._id.id);
};

export const deleteFooditemSuggestionById = async (id: string) => {
    if (!Bson.ObjectID.isValid(id)) {
        throw new InvalidIdException();
    }

    return await fooditemsSuggestions.deleteOne({
        _id: new Bson.ObjectId(id),
    });
};