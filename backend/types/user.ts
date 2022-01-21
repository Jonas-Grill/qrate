import UserLevelSchema from "./userlevel.ts";
import AllergenSchema from "./allergen.ts";
import {Bson} from "../deps.ts"

export default interface UserSchema {
    _id: Bson.ObjectId;
    username: string;
    password: string;
    eMail: string;
    userLevel: UserLevelSchema;
    allergens: AllergenSchema[];
    diet: string;
}