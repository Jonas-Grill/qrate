export default interface UserSchema {
    _id: { $oid: string };
    username: string;
    password: string;
}