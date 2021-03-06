import * as $ from "jquery";
import {url} from "./userDataRequests";

export class foodRequests {
//GET REQUEST FOR ALL FOOD ITEMS
  public getAllFoodItems() {
    return $.ajax({
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

  //GET REQUEST FOR ALL Allergens
  public getAllAllergens() {
    return $.ajax({
      url: `${url}allergens`,
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
  public getFoodItemData(id: string, bool: boolean) {
    return $.ajax({
      url: `${url}fooditems/${id}?barcode=${bool}`,
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
  public getAllFoodItemSuggestions() {
    return $.ajax({
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
  public createNewFoodItemSuggestion(name: string, pictures: Array<string>, allergene: Array<string>, diet: string, barcode: Array<string>, username: string) {
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
  public getFoodItemSuggestion(id: string) {
    return $.ajax({
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
  public voteForFoodItemSuggestion(id: string, vote: boolean) {
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
}
