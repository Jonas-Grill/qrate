import {Status, Request, Response, State, RouteParams} from "../deps.ts";
import * as fooditemService from "../services/fooditemService.ts";
import Fooditem from "../types/fooditem.ts";
import {instanceOfFooditem} from "../types/fooditem.ts";

export const createFooditem = async (
    ctx: {
        request: Request;
        response: Response;
        state: State;
        assert: Function;
    }) => {
    ctx.assert(ctx.request.hasBody, Status.BadRequest, "Please provide data");

    const fooditemData = await ctx.request.body().value;

    ctx.assert(fooditemData, Status.BadRequest, "Please provide data");
    ctx.assert(instanceOfFooditem(fooditemData), Status.BadRequest, "Please provide valid data");

    const fooditem: Fooditem | undefined = await fooditemService.createNewFooditem(fooditemData);

    if (!fooditem) {
        ctx.response.status = Status.BadRequest;
        ctx.response.body = {
            msg: "Please provide valid data"
        }
        return;
    }

    ctx.response.status = Status.Created;
    ctx.response.body = {
        _id: fooditem._id,
        name: fooditem.name,
        pictures: fooditem.pictures,
        allergens: fooditem.allergens,
        nutritionScore: fooditem.nutritionScore,
        diet: fooditem.diet,
        barcodes: fooditem.barcodes,
    };
}

export const getAllFooditems = async (
    ctx: {
        request: Request;
        response: Response;
    }) => {
    const fooditems: Fooditem[] = await fooditemService.getAllFooditems();

    if (!fooditems) {
        ctx.response.status = Status.BadRequest;
        ctx.response.body = {
            msg: "Please provide valid data"
        }
        return;
    }

    ctx.response.status = Status.OK;
    ctx.response.body = fooditems;
}

export const getOneFooditem = async (
    ctx: {
        request: Request;
        response: Response;
        assert: Function;
        params: any;
    }) => {
    ctx.assert(ctx.params.id, Status.BadRequest, "Please provide an id");

    const barcode = ctx.request.url.searchParams.get('barcode');

    let fooditem: Fooditem;

    if (barcode && barcode === "true") {
        fooditem = await fooditemService.getFooditemByBarcode(ctx.params.id);
    } else {
        fooditem = await fooditemService.getFooditemById(ctx.params.id);
    }

    ctx.response.status = Status.OK;
    ctx.response.body = {
        _id: fooditem._id,
        name: fooditem.name,
        pictures: fooditem.pictures,
        allergens: fooditem.allergens,
        nutritionScore: fooditem.nutritionScore,
        diet: fooditem.diet,
        barcodes: fooditem.barcodes,
    };
}

