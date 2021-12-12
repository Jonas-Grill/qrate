export default interface FoodSchema {
    _id: { $oid: string };
    name: string;
    pictures: [];
    allergens: [];
    nutritionScore: object;
    diet: string;
    barcode: [];
}