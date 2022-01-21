import {Component, OnInit} from '@angular/core';
import {Allergene} from "./allergenes";
import {Router} from "@angular/router";
import {userdatarequests} from "../backendrequests/userdatarequests";

@Component({
  selector: 'app-preferencesanddiet',
  templateUrl: './preferencesanddiet.component.html',
  styleUrls: ['./preferencesanddiet.component.scss']
})

export class PreferencesanddietComponent implements OnInit {
  public allergielist: string[] = [];
  public dietlist: string[] = [];
  public allergene: Allergene[] = [];
  public traces: Allergene[] = [];
  public diets: Allergene[] = [];
  public userdiet: string = '';
  public userpreferences: object[] = [];

  constructor(private router: Router, private userApi: userdatarequests) {
  }

  ngOnInit(): void {
    this.userApi.getAllPreferences().done((result) => {
      this.allergielist = result;
      this.allergielist.sort();

      for (let allergie of this.allergielist) {
        this.allergene.push({id: "allergie" + allergie, name: allergie, disabled: false});
        this.traces.push({id: "tracesof" + allergie, name: allergie, disabled: false});
      }
    });
    this.userApi.getAllDiets().done((result) => {
      this.dietlist = result;
      this.dietlist.sort();

      for (let diet of this.dietlist) {
        this.diets.push({id: diet, name: diet, disabled: false});
      }
    });
  }

  onChangeAllergies(selected: any, name: string): void {
    // ON CHANGE CHECKBOX IN CATEGORY ALLERGIES
    if (selected.target.checked) {
      if (selected.currentTarget.id.includes("allergie")) {
        for (let i = 0; i < this.traces.length; i++) {
          if (this.traces[i].id === "tracesof" + name) {
            this.traces[i].disabled = true;
          }
        }
      } else if (selected.currentTarget.id.includes("tracesof")) {
        for (let i = 0; i < this.allergene.length; i++) {
          if (this.allergene[i].id === "allergie" + name) {
            this.allergene[i].disabled = true;
          }
        }
      }
    } else {
      if (selected.currentTarget.id.includes("allergie")) {
        for (let i = 0; i < this.traces.length; i++) {
          if (this.traces[i].id === "tracesof" + name) {
            this.traces[i].disabled = false;
          }
        }
      } else if (selected.currentTarget.id.includes("tracesof")) {
        for (let i = 0; i < this.allergene.length; i++) {
          if (this.allergene[i].id === "allergie" + name) {
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
        this.userdiet = name;
      }
    } else {
      for (let i = 0; i < this.diets.length; i++) {
        if (this.diets[i].id !== name) {
          this.diets[i].disabled = false;
        }
        this.userdiet = '';
      }
    }
  }

  onClickNext() {
    //UPDATE USER DATA IN BACKEND
    for (let i = 0; i < this.allergene.length; i++) {
      if (this.allergene[i].disabled) {
        this.userpreferences.push({name: this.allergene[i].name, tracesOf: true})
      }
    }

    for (let i = 0; i < this.traces.length; i++) {
      if (this.traces[i].disabled) {
        this.userpreferences.push({name: this.traces[i].name, tracesOf: false})
      }
    }

    this.userApi.updateUserPreferences(this.userpreferences, this.userdiet);

    //ROUTING
    this.router.navigate(['/', 'beitraege']);
  }
}
