export default interface AllergenSchema {
    name: string;
    tracesOf: boolean;
}

export const instanceOfAllergen = (object: any): object is AllergenSchema => {
    return 'name' in object
        && 'tracesOf' in object;
}