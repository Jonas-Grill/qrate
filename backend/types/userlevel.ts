export default interface UserLevelSchema {
    levelName: string;
    levelValue: number;
    exp: number;
}

export const instanceOfUserLevel = (object: any): object is UserLevelSchema => {
    return 'levelName' in object
        && 'levelValue' in object
        && 'exp' in object
}