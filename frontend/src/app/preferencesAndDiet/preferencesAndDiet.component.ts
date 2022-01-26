import {Component, OnInit} from '@angular/core';
import {Allergene} from "./allergens";
import {Router} from "@angular/router";
import {userDataRequests} from "../backendRequests/userDataRequests";

@Component({
  selector: 'app-preferencesanddiet',
  templateUrl: './preferencesAndDiet.component.html',
  styleUrls: ['./preferencesAndDiet.component.scss']
})

export class PreferencesAndDietComponent implements OnInit {
  public allergyList: string[] = [];
  public dietList: string[] = [];
  public allergene: Allergene[] = [];
  public traces: Allergene[] = [];
  public diets: Allergene[] = [];
  public userDiet: string = '';
  public userPreferences: object[] = [];

  constructor(private router: Router, private userApi: userDataRequests) {
  }

  ngOnInit(): void {
    this.userApi.getAllPreferences().done((result) => {
      this.allergyList = result;
      this.allergyList.sort();

      for (let allergy of this.allergyList) {
        this.allergene.push({id: "allergy" + allergy, name: allergy, disabled: false});
        this.traces.push({id: "tracesof" + allergy, name: allergy, disabled: false});
      }
    });
    this.userApi.getAllDiets().done((result) => {
      this.dietList = result;
      this.dietList.sort();

      for (let diet of this.dietList) {
        this.diets.push({id: diet, name: diet, disabled: false});
      }
    });
  }

  onChangeAllergies(selected: any, name: string): void {
    // ON CHANGE CHECKBOX IN CATEGORY ALLERGIES
    if (selected.target.checked) {
      if (selected.currentTarget.id.includes("allergy")) {
        for (let i = 0; i < this.traces.length; i++) {
          if (this.traces[i].id === "tracesof" + name) {
            this.traces[i].disabled = true;
          }
        }
      } else if (selected.currentTarget.id.includes("tracesof")) {
        for (let i = 0; i < this.allergene.length; i++) {
          if (this.allergene[i].id === "allergy" + name) {
            this.allergene[i].disabled = true;
          }
        }
      }
    } else {
      if (selected.currentTarget.id.includes("allergy")) {
        for (let i = 0; i < this.traces.length; i++) {
          if (this.traces[i].id === "tracesof" + name) {
            this.traces[i].disabled = false;
          }
        }
      } else if (selected.currentTarget.id.includes("tracesof")) {
        for (let i = 0; i < this.allergene.length; i++) {
          if (this.allergene[i].id === "allergy" + name) {
            this.allergene[i].disabled = false;
          }
        }
      }
    }
  }

  onChangeDiet(selected: any, name: string): void {
    // ON CHANGE CHECKBOX IN CATEGORY DIET
    if (selected.target.checked) {
      for (let i = 0; i < this.diets.length; i++) {
        if (this.diets[i].id !== name) {
          this.diets[i].disabled = true;
        }
        this.userDiet = name;
      }
    } else {
      for (let i = 0; i < this.diets.length; i++) {
        if (this.diets[i].id !== name) {
          this.diets[i].disabled = false;
        }
        this.userDiet = '';
      }
    }
  }

  onClickNext() {
    //UPDATE USER DATA IN BACKEND
    for (let i = 0; i < this.allergene.length; i++) {
      if (this.allergene[i].disabled) {
        this.userPreferences.push({name: this.allergene[i].name, tracesOf: true})
      }
    }

    for (let i = 0; i < this.traces.length; i++) {
      if (this.traces[i].disabled) {
        this.userPreferences.push({name: this.traces[i].name, tracesOf: false})
      }
    }

    this.userApi.updateUserPreferences(this.userPreferences, this.userDiet);

    //ROUTING
    this.router.navigate(['/', 'beitraege']);
  }
}
