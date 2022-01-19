import UserLevelSchema from "./userlevel.ts";
import AllergenSchema from "./allergen.ts";

export default interface UserSchema {
    _id: { $oid: string };
    username: string;
    password: string;
    eMail: string;
    userLevel: UserLevelSchema;
    allergens: AllergenSchema[];
    diet: string;
}