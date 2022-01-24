export default interface AllergenSchema {
    name: string;
    tracesOf: boolean;
}

export const instanceOfAllergen = (object: any): object is AllergenSchema => {
    return 'name' in object
        && 'tracesOf' in object;
}

export const instanceOfAllergenArray = (object: any): object is AllergenSchema[] => {
    if (!Array.isArray(object)) {
        return false;
    }

    object.forEach(o => {
        if (!instanceOfAllergen(o)) {
            return false;
        }
    });

    return true;
}