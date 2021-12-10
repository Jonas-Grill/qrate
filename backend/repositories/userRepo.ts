import {Bson} from "https://deno.land/x/mongo@v0.28.1/mod.ts";
import db from "../config/db-connection.ts";
import User from "../types/user.ts";

const users = db.collection<User>("users");

export const getAllUser = async () => {
    return await users.find({}, {noCursorTimeout: false}).toArray();
};

export const getUserById = async (id: string) => {
    if (!Bson.ObjectID.isValid(id)) {
        return;
    }

    const user: User | undefined = await users.findOne({
        _id: new Bson.ObjectId(id),
    }, {noCursorTimeout: false});

    return user;
};

export const getUserByUsername = async (username: string) => {
    const user: User | undefined = await users.findOne({
        username: username,
    }, {noCursorTimeout: false});

    return user;
};

export const countUserByUsername = async (username: string) => {
    return await users.count({
        username: username,
    });
};

export const createUser = async (user: User) => {
    const id = await users.insertOne({
        username: user.username,
        password: user.password,
    });

    return id.toString();
};

export const updateUser = async (user: User) => {
    if (!Bson.ObjectID.isValid(user._id.$oid)) {
        return;
    }

    await users.updateOne(
        {
            _id: new Bson.ObjectId(user._id.$oid),
        },
        {
            username: user.username,
            password: user.password,
        },
    );

    return await getUserById(user._id.$oid);
};

export const deleteUser = async (id: string) => {
    if (!Bson.ObjectID.isValid(id)) {
        return;
    }

    return await users.deleteOne({
        _id: new Bson.ObjectId(id),
    });
};
