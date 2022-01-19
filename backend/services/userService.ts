import User from "../types/user.ts";
import * as userRepo from "../repositories/userRepo.ts";
import {bcrypt} from "../deps.ts";

export const getUserByUsername = async (username: string) => {
    return await userRepo.getUserByUsername(username);
};

export const login = async (
    userData: { username: string; password: string },
) => {
    const user: User | undefined = await userRepo.getUserByUsername(
        userData.username,
    );

    if (!user) {
        return false;
    } else if (await bcrypt.compare(userData.password, user.password)) {
        return true;
    } else {
        return false;
    }
};

export const createNewUser = async (
    userData: { username: string; password: string; },
) => {
    if (await userRepo.countUserByUsername(userData.username) > 0) {
        return;
    }

    userData.password = await bcrypt.hash(
        userData.password,
        await bcrypt.genSalt(8),
    );

    const newUser: User = {
        _id: {
            $oid: "",
        },
        username: userData.username,
        password: userData.password,
    };

    newUser._id.$oid = await userRepo.createUser(newUser);

    return newUser;
};