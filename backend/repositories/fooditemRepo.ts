import db from '../config/db-connection.ts';
import Fooditem from "../types/fooditem.ts";
import {Bson} from "../deps.ts";
import InvalidIdException from "../exceptions/invalidIdException.ts";
import InvalidDataException from "../exceptions/invalidDataException.ts";

const fooditems = db.collection<Fooditem>("fooditems");

export const createFooditem = async (fooditem: Fooditem) => {
    const id = await fooditems.insertOne({
        name: fooditem.name,
        pictures: fooditem.pictures || [],
        allergens: fooditem.allergens,
        nutritionScore: fooditem.nutritionScore,
        diet: fooditem.diet,
        barcodes: fooditem.barcodes,
    });

    return id.toString();
};

export const getAllFooditems = async () => {
    return await fooditems.find({}).toArray();
};

export const getFooditemById = async (id: string) => {
    if (!Bson.ObjectId.isValid(id)) {
        throw new InvalidIdException();
    }

    return await fooditems.findOne({
        _id: new Bson.ObjectId(id),
    });
};

export const getFooditemByBarcode = async (barcode: string) => {
    const cursor = fooditems.find({});

    for await (const fooditem of cursor) {
        if (fooditem.barcodes.includes(barcode)) {
            return fooditem;
        }
    }

    return;
};

export const updateFooditem = async (fooditem: Fooditem) => {
    if (!fooditem._id) {
        throw new InvalidIdException();
    }

    if (!Bson.ObjectId.isValid(fooditem._id.toString())) {
        throw new InvalidIdException();
    }

    await fooditems.updateOne(
        {
            _id: new Bson.ObjectId(fooditem._id.toString()),
        },
        {
            $set: {
                name: fooditem.name,
                pictures: fooditem.pictures,
                allergens: fooditem.allergens,
                nutritionScore: fooditem.nutritionScore,
                diet: fooditem.diet,
                barcodes: fooditem.barcodes,
            }
        },
    );

    return await getFooditemById(fooditem._id.toString());
};

export const deleteFooditemById = async (id: string) => {
    if (!Bson.ObjectId.isValid(id)) {
        throw new InvalidIdException();
    }

    return await fooditems.deleteOne({
        _id: new Bson.ObjectId(id),
    });
};