import * as $ from "jquery";
import {url} from "./userdatarequests";

//GET REQUEST FOR ALL FOOD ITEMS
export function getAllFoodItems() {
  $.ajax({
    url: `${url}fooditems`,
    type: 'GET',
    xhrFields: {
      withCredentials: true,
    },
    success(response: any, errors: any) {

    },
    error(xhr: any) {

    },
  });
}

//GET REQUEST FOR DATA OF A SPECIFIC FOOD ITEM (APPROVED)
export function getFoodItemData(id: string) {
  const url = 'http://localhost:8080/fooditems/${id}'
  $.ajax({
    url: `${url}fooditems/${id}`,
    type: 'GET',
    xhrFields: {
      withCredentials: true,
    },
    success(response: any, errors: any) {

    },
    error(xhr: any) {

    },
  });
}

//GET REQUEST TO GET DATA OF ALL FOOD ITEM SUGGESTIONS (NOT APPROVED)
export function getAllFoodItemSuggestions() {
  $.ajax({
    url: `${url}fooditemSuggestions`,
    type: 'GET',
    xhrFields: {
      withCredentials: true,
    },
    success(response: any, errors: any) {

    },
    error(xhr: any) {

    },
  });
}

//POST REQUEST TO CREATE A NEW FOOD ITEM SUGGESTION (NOT APPROVED)
export function createNewFoodItemSuggestion(name: string, pictures: Array<string>, allergene: Array<string>, diet: string, barcode: Array<string>, username: string) {
  $.ajax({
    url: `${url}fooditemSuggestions`,
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({
      name: name,
      pictures: pictures,
      allergene: allergene,
      diet: diet,
      barcodes: barcode,
      creator: username
    }),
    dataType: 'json',
    xhrFields: {
      withCredentials: true,
    },
    success(response: any, errors: any) {

    },
    error(xhr: any) {

    },
  });
}

//GET REQUEST TO GET DATA OF A SPECIFIC FOOD ITEM SUGGESTION (NOT APPROVED)
export function getFoodItemSuggestion(id: string) {
  $.ajax({
    url: `${url}fooditemSuggestions/${id}`,
    type: 'GET',
    xhrFields: {
      withCredentials: true,
    },
    success(response: any, errors: any) {

    },
    error(xhr: any) {

    },
  });
}

//POST REQUEST TO VOTE FOR A FOOD ITEM
export function voteForFoodItemSuggestion(id: string, vote: boolean) {
  $.ajax({
    url: `${url}fooditemSuggestions/${id}`,
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({upVote: vote}),
    dataType: 'json',
    xhrFields: {
      withCredentials: true,
    },
    success(response: any, errors: any) {

    },
    error(xhr: any) {

    },
  });
}
