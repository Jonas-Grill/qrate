import UserLevelSchema from "./userlevel.ts";

export default interface UserSchema {
    _id: { $oid: string };
    username: string;
    password: string;
    eMail: string;
    userLevel: UserLevelSchema;
    allergens: [];
    diet: string;
}