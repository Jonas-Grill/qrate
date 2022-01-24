import UserLevelSchema, {instanceOfUserLevel} from "./userlevel.ts";
import AllergenSchema, {instanceOfAllergen} from "./allergen.ts";
import {Bson} from "../deps.ts"

export default interface UserSchema {
    _id?: Bson.ObjectId;
    username: string;
    password: string;
    eMail: string;
    userLevel: UserLevelSchema;
    allergens: AllergenSchema[];
    diet: string;
}

export const instanceOfUser = (object: any): object is UserSchema => {
    return 'username' in object
        && 'password' in object
        && 'eMail' in object
        && 'userLevel' in object && instanceOfUserLevel(object.userLevel)
        && 'allergens' in object && instanceOfAllergen(object.allergens)
        && 'diet' in object;
}