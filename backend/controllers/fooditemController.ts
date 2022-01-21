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

    ctx.assert(instanceOfFooditem(fooditemData), Status.BadRequest, "Please provide valid data");

    const fooditem: Fooditem | undefined = await fooditemService.createNewFooditem(fooditemData, ctx.state.currentUser);

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

export const getAllFooditem = async (
    ctx: {
        request: Request;
        response: Response;
    }) => {
    const fooditems: Fooditem[] = await fooditemService.getAllFooditem();

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

    const fooditem: Fooditem = await fooditemService.getFooditem(ctx.params.id);

    if (!fooditem) {
        ctx.response.status = Status.BadRequest;
        ctx.response.body = {
            msg: "Please provide valid data"
        }
        return;
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

