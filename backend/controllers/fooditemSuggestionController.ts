import {Status, Request, Response, State, RouteParams} from "../deps.ts";
import * as fooditemSuggestionService from "../services/fooditemSuggestionService.ts";
import FooditemSuggestion from "../types/fooditemSuggestion.ts";
import {instanceOfFooditem} from "../types/fooditem.ts";

export const createFooditemSuggestion = async (
    ctx: {
        request: Request;
        response: Response;
        state: State;
        assert: Function;
    }) => {
    ctx.assert(ctx.request.hasBody, Status.BadRequest, "Please provide data");

    const fooditemData = await ctx.request.body().value;

    ctx.assert(instanceOfFooditem(fooditemData), Status.BadRequest, "Please provide valid data");

    const fooditemSuggestion: FooditemSuggestion | undefined = await fooditemSuggestionService.createNewFooditemSuggestion(fooditemData, ctx.state.currentUser);

    if (!fooditemSuggestion) {
        ctx.response.status = Status.BadRequest;
        ctx.response.body = {
            msg: "Please provide valid data"
        }
        return;
    }

    ctx.response.status = Status.Created;
    ctx.response.body = {
        _id: fooditemSuggestion._id,
        fooditem: fooditemSuggestion.fooditem,
        creator: fooditemSuggestion.creator,
        upVotes: fooditemSuggestionService.getUpVoteCount(fooditemSuggestion),
        downVotes: fooditemSuggestionService.getDownVoteCount(fooditemSuggestion),
        rating: fooditemSuggestion.rating,
    };
}

export const getAllFooditemSuggestions = async (
    ctx: {
        request: Request;
        response: Response;
    }) => {
    const fooditemSuggestions: FooditemSuggestion[] = await fooditemSuggestionService.getAllFooditemSuggestions();

    if (!fooditemSuggestions) {
        ctx.response.status = Status.BadRequest;
        ctx.response.body = {
            msg: "Please provide valid data"
        }
        return;
    }

    ctx.response.status = Status.OK;
    ctx.response.body = fooditemSuggestions.map((fooditemSuggestion: any) => {
        fooditemSuggestion.upVotes = fooditemSuggestionService.getUpVoteCount(fooditemSuggestion);
        fooditemSuggestion.downVotes = fooditemSuggestionService.getDownVoteCount(fooditemSuggestion);
        delete fooditemSuggestion.votes;

        return fooditemSuggestion;
    });
}

export const getOneFooditemSuggestion = async (
    ctx: {
        request: Request;
        response: Response;
        assert: Function;
        params: any;
    }) => {
    ctx.assert(ctx.params.id, Status.BadRequest, "Please provide an id");

    const fooditemSuggestion: FooditemSuggestion = await fooditemSuggestionService.getFooditemSuggestion(ctx.params.id);

    if (!fooditemSuggestion) {
        ctx.response.status = Status.BadRequest;
        ctx.response.body = {
            msg: "Please provide valid data"
        }
        return;
    }

    ctx.response.status = Status.OK;
    ctx.response.body = {
        _id: fooditemSuggestion._id,
        fooditem: fooditemSuggestion.fooditem,
        creator: fooditemSuggestion.creator,
        upVotes: fooditemSuggestionService.getUpVoteCount(fooditemSuggestion),
        downVotes: fooditemSuggestionService.getDownVoteCount(fooditemSuggestion),
        rating: fooditemSuggestion.rating,
    };
}

export const addVote = async (
    ctx: {
        request: Request;
        response: Response;
        assert: Function;
        state: State;
        params: any;
    }) => {
    ctx.assert(ctx.request.hasBody, Status.BadRequest, "Please provide data");

    const data = await ctx.request.body().value;

    ctx.assert("upVote" in data, Status.BadRequest, "Please provide valid data");
    ctx.assert(ctx.params.id, Status.BadRequest, "Please provide an id");

    const fooditemSuggestion: FooditemSuggestion | undefined = await fooditemSuggestionService.addVote(ctx.params.id, data.upVote, ctx.state.currentUser);

    if (!fooditemSuggestion) {
        ctx.response.status = Status.BadRequest;
        ctx.response.body = {
            msg: "Please provide valid data"
        }
        return;
    }

    ctx.response.status = Status.OK;
    ctx.response.body = {
        _id: fooditemSuggestion._id,
        fooditem: fooditemSuggestion.fooditem,
        creator: fooditemSuggestion.creator,
        upVotes: fooditemSuggestionService.getUpVoteCount(fooditemSuggestion),
        downVotes: fooditemSuggestionService.getDownVoteCount(fooditemSuggestion),
        rating: fooditemSuggestion.rating,
    };
}