import * as $ from "jquery";

const baseURL = 'http://localhost:8080/';

//POST REQUEST FOR USER REGISTRATION
export function registerUser(username: string, password: string, email: string) {
  $.ajax({
    url: `${baseURL}users`,
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({username: username, password: password, eMail: email}),
    dataType: 'json',
    xhrFields: {
      withCredentials: true,
    },
    success(response, errors) {
      return response;
    },
    error(xhr) {
      throw new Error(xhr.statusText);
    },
  });
}

//GET REQUEST FOR USER DATA
export function getUserData() {
  $.ajax({
    url: `${baseURL}users`,
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
    url: `${baseURL}users`,
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

export function updateUserPreferences(username: string, preferences: Array<string>) {
  $.ajax({
    url: `${baseURL}users`,
    type: 'PUT',
    contentType: 'application/json',
    data: JSON.stringify({allergene: preferences}),
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

export function updateUserDiet(token: string, diet: Array<string>) {
  $.ajax({
    url: `${baseURL}users`,
    type: 'PUT',
    contentType: 'application/json',
    data: JSON.stringify({diet: diet}),
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
    url: `${baseURL}login`,
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({username: username, password: password}),
    dataType: 'json',
    xhrFields: {
      withCredentials: true,
    },
    success(response: any) {
      response.token;
    },
    error(xhr) {
      throw new Error(xhr.statusText);
    },
  });
}

//GET REQUEST FOR ALL PREFERENCES
export function getAllPreferences() {
  $.ajax({
    url: 'http://localhost:8080/allergens',
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
export function getAllDiets() {
  $.ajax({
    url: 'http://localhost:8080/diets',
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
