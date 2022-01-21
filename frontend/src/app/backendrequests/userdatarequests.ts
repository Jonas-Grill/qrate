import * as $ from "jquery";

export const url = "http://localhost:8008/"

export class userDataRequests {
//POST REQUEST FOR USER REGISTRATION
  public registerUser(username: string, password: string, email: string) {
    return $.ajax({
      url: `${url}users`,
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({username: username, password: password, eMail: email}),
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

//GET REQUEST FOR USER DATA
  public getUserData() {
    return $.ajax({
      url: `${url}users`,
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

//UPDATE REQUEST FOR USER DATA
  public updateUserPassword(username: string, password: string) {
    return $.ajax({
      url: `${url}users`,
      type: 'PUT',
      contentType: 'application/json',
      data: JSON.stringify({password: password}),
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

  public updateUserPreferences(preferences: Array<object>, diet: string,) {
    return $.ajax({
      url: `${url}users`,
      type: 'PUT',
      contentType: 'application/json',
      data: JSON.stringify({allergens: preferences, diet: diet}),
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

//POST REQUEST FOR USER LOGIN
  public loginUser(username: string, password: string) {
    return $.ajax({
      url: `${url}login`,
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({username: username, password: password}),
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

//GET REQUEST FOR ALL PREFERENCES
  public getAllPreferences() {
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

//GET REQUEST FOR ALL DIETS
  public getAllDiets() {
    return $.ajax({
      url: `${url}diets`,
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
}
