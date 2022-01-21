import db from '../config/db-connection.ts';
import FooditemSuggestion from "../types/fooditemSuggestion.ts";
import {Bson} from "../deps.ts";
import InvalidIdException from "../exceptions/invalidIdException.ts";

const fooditemSuggestions = db.collection<FooditemSuggestion>("fooditemSuggestions");

export const createFooditemSuggestion = async (fooditemSuggestion: FooditemSuggestion) => {
    const id = await fooditemSuggestions.insertOne({
        fooditem: fooditemSuggestion.fooditem,
        creator: fooditemSuggestion.creator,
        votes: fooditemSuggestion.votes,
        rating: fooditemSuggestion.rating,
    });

    return id.toString();
};

export const getAllFooditemSuggestion = async () => {
    return await fooditemSuggestions.find({}).toArray();
};

export const getFooditemSuggestionById = async (id: string) => {
    if (!Bson.ObjectId.isValid(id)) {
        throw new InvalidIdException();
    }

    return await fooditemSuggestions.findOne({
        _id: new Bson.ObjectId(id),
    });
};

export const updateFooditemSuggestion = async (fooditemSuggestion: FooditemSuggestion) => {
    if (!fooditemSuggestion._id) {
        throw new InvalidIdException();
    }

    if (!Bson.ObjectId.isValid(fooditemSuggestion._id.toString())) {
        throw new InvalidIdException();
    }

    await fooditemSuggestions.updateOne(
        {
            _id: new Bson.ObjectId(fooditemSuggestion._id.toString()),
        },
        {
            $set: {
                fooditem: fooditemSuggestion.fooditem,
                votes: fooditemSuggestion.votes,
                rating: fooditemSuggestion.rating,
            }
        },
    );

    return await getFooditemSuggestionById(fooditemSuggestion._id.toString());
};

export const deleteFooditemSuggestionById = async (id: string) => {
    if (!Bson.ObjectId.isValid(id)) {
        throw new InvalidIdException();
    }

    return await fooditemSuggestions.deleteOne({
        _id: new Bson.ObjectId(id),
    });
};