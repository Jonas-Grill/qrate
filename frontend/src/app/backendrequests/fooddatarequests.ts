import * as $ from "jquery";

//GET REQUEST FOR ALL FOOD ITEMS
export function getAllFoodItems() {
  $.ajax({
    url: 'http://localhost:8080/fooditems',
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
    url: `http://localhost:8080/fooditems/${id}`,
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
    url: 'http://localhost:8080/fooditemSuggestions',
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
    url: 'http://localhost:8080/fooditemSuggestions',
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
    url: `http://localhost:8080/fooditemSuggestions/${id}`,
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
    url: `http://localhost:8080/fooditemSuggestions/${id}`,
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
