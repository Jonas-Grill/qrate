import db from '../config/db-connection.ts';
import Fooditem from "../types/fooditem.ts";
import {Bson} from "../deps.ts";
import InvalidIdException from "../exceptions/invalidIdException.ts";
import AllergenSchema from "../types/allergen.ts";

const fooditems = db.collection<Fooditem>("fooditem");

export const createFooditem = async (fooditem: Fooditem) => {
    const id = await fooditems.insertOne({
        name: fooditem.name,
        pictures: fooditem.pictures,
        allergens: fooditem.allergens,
        nutritionScore: fooditem.nutritionScore,
        diet: fooditem.diet,
        barcode: fooditem.barcode,
    });

    return id.toString();
};

export const getAllFooditem = async () => {
    return await fooditems.find({name: {$ne: null}}).toArray();
};

export const getFooditemById = async (id: string) => {
    if (!Bson.ObjectId.isValid(id)) {
        throw new InvalidIdException();
    }

    return await fooditems.findOne({
        _id: new Bson.ObjectId(id),
    });
};

export const updateFooditem = async (fooditem: Fooditem) => {
    if (!Bson.ObjectId.isValid(fooditems._id.id)) {
        throw new InvalidIdException();
    }

    await fooditems.updateOne(
        {
            _id: new Bson.ObjectId(fooditems._id.id),
        },
        {
            name: fooditems.name,
            pictures: fooditems.pictures,
            allergens: fooditems.allergens,
            nutritionScore: fooditems.nutritionScore,
            diet: fooditems.diet,
            barcode: fooditems.barcode,
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