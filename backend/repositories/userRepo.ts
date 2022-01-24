import {Bson} from "../deps.ts";
import db from "../config/db-connection.ts";
import User from "../types/user.ts";
import InvalidIdException from "../exceptions/invalidIdException.ts";

const users = db.collection<User>("users");

export const createUser = async (user: User) => {
    const id = await users.insertOne({
        username: user.username,
        password: user.password,
        eMail: user.eMail,
        userLevel: user.userLevel,
        allergens: user.allergens,
        diet: user.diet,
    });

    return id.toString();
}

export const getAllUsers = async () => {
    return await users.find({}).toArray();
}

export const getUserById = async (id: string) => {
    if (!Bson.ObjectId.isValid(id)) {
        throw new InvalidIdException();
    }

    return await users.findOne({
        _id: new Bson.ObjectId(id),
    });
}

export const getUserByUsername = async (username: string) => {
    return await users.findOne({
        username: username,
    });
}

export const getUserByEmail = async (email: string) => {
    return await users.findOne({
        eMail: email,
    });
}

export const updateUser = async (user: User) => {
    if (!user._id) {
        throw new InvalidIdException();
    }

    if (!Bson.ObjectId.isValid(user._id.toString())) {
        throw new InvalidIdException();
    }

    await users.updateOne(
        {
            _id: new Bson.ObjectId(user._id.toString()),
        },
        {
            $set: {
                username: user.username,
                password: user.password,
                eMail: user.eMail,
                userLevel: user.userLevel,
                allergens: user.allergens,
                diet: user.diet,
            }
        },
    );

    return await getUserById(user._id.toString());
}

export const deleteUser = async (id: string) => {
    if (!Bson.ObjectId.isValid(id)) {
        throw new InvalidIdException();
    }

    return await users.deleteOne({
        _id: new Bson.ObjectId(id),
    });
}
