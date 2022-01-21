import * as $ from "jquery";

export const url = "http://localhost:8008/"

//POST REQUEST FOR USER REGISTRATION
export function registerUser(username: string, password: string, email: string) {
  $.ajax({
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
export function getUserData() {
  $.ajax({
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
export function updateUserPassword(username: string, password: string) {
  $.ajax({
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

export function updateUserPreferences(preferences: Array<object>, diet: string,) {
  $.ajax({
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
export function loginUser(username: string, password: string) {
  $.ajax({
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
export function getAllPreferences() {
  $.ajax({
    url: `${url}allergens`,
    type: 'GET',
    xhrFields: {
      withCredentials: true,
    },
    success(response: any, errors: any) {
      console.log(response);

    },
    error(xhr: any) {

    },
  });
}

//GET REQUEST FOR ALL DIETS
export function getAllDiets() {
  $.ajax({
    url: `${url}diets`,
    type: 'GET',
    xhrFields: {
      withCredentials: true,
    },
    success(response: any, errors: any) {
      console.log(response);
    },
    error(xhr: any) {

    },
  });
}
