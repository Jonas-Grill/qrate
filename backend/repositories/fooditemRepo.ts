import db from '../config/db-connection.ts';
import Fooditem from "../types/fooditem.ts";
import {Bson} from "../deps.ts";
import InvalidIdException from "../exceptions/invalidIdException.ts";

const fooditems = db.collection<Fooditem>("fooditem");

export const createFooditem = async (fooditem: Fooditem) => {
    const id = await fooditems.insertOne({
        fooditem: fooditems.fooditem,
        creator: fooditems.creator,
        votes: fooditems.votes,
        rating: fooditems.rating,
    });

    return id.toString();
};

export const getAllFooditem = async () => {
    return await fooditems.find({creator: {$ne: null}}).toArray();
};

export const getFooditemById = async (id: string) => {
    if (!Bson.ObjectId.isValid(id)) {
        throw new InvalidIdException();
    }

    return await fooditems.findOne({
        _id: new Bson.ObjectId(id),
    });
};

export const updateFooditemSuggestion = async (fooditemSuggestion: Fooditem) => {
    if (!Bson.ObjectId.isValid(fooditems._id.id)) {
        throw new InvalidIdException();
    }

    await fooditems.updateOne(
        {
            _id: new Bson.ObjectId(fooditems._id.id),
        },
        {
            fooditem: fooditems.fooditem,
            votes: fooditems.votes,
            rating: fooditems.rating,
        },
    );

    return await getFooditemById(fooditems._id.id.toString());
};

export const deleteFooditemById = async (id: string) => {
    if (!Bson.ObjectId.isValid(id)) {
        throw new InvalidIdException();
    }

    return await fooditems.deleteOne({
        _id: new Bson.ObjectId(id),
    });
};