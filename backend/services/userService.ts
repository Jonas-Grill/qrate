import User from "../types/user.ts";
import * as userRepo from "../repositories/userRepo.ts";
import invalidDataException from "../exceptions/invalidDataException.ts";
import {instanceOfAllergenArray} from "../types/allergen.ts";

export const createNewUser = async (userData: {
    username: string; password: string; eMail: string
}) => {
    if ((await userRepo.getUserByUsername(userData.username))) {
        throw new invalidDataException("This username is already in use");
    }

    if ((await userRepo.getUserByEmail(userData.eMail))) {
        throw new invalidDataException("This email is already in use");
    }

    // password hashing disabled for testing
    // userData.password = await bcrypt.hash(
    //     userData.password,
    //     await bcrypt.genSalt(8),
    // );

    const id: string = await userRepo.createUser({
        username: userData.username,
        password: userData.password,
        eMail: userData.eMail,
        userLevel: {
            levelName: "Kadett",
            levelValue: 1,
            exp: 0,
        },
        allergens: [],
        diet: "",
    });

    return await userRepo.getUserById(id);
}

export const getUserByUsername = async (username: string) => {
    const user = await userRepo.getUserByUsername(username);

    if (!user) {
        throw new invalidDataException(`A user with the username ${username} does not exist`);
    }

    return user;
}

export const isUserDataValid = async (
    userData: { username: string; password: string },
) => {

    let user: User | undefined = await userRepo.getUserByUsername(
        userData.username,
    );

    if (!user) {
        user = await userRepo.getUserByEmail(userData.username);
    }

    if (!user) {
        throw new invalidDataException(`There is no user with the provided user password combination`);
    } else if (userData.password === user.password) {
        return true;
    } else {
        return false;
    }
}

export const updateUser = async (user: any, username: string) => {
    const oldUser: User | undefined = await userRepo.getUserByUsername(username);

    if (!(oldUser)) {
        throw new invalidDataException("A user with this username does not exist");
    }

    const newUser: User | undefined = await userRepo.updateUser({
        _id: oldUser._id,
        username: oldUser.username,
        password: user.password || oldUser.password,
        eMail: user.eMail || oldUser.eMail,
        userLevel: oldUser.userLevel,
        allergens: instanceOfAllergenArray(user.allergens) ? user.allergens : oldUser.allergens,
        diet: user.diet || oldUser.diet,
    });

    return newUser;
}


