import {Component, OnInit} from '@angular/core';
import {Allergene} from "./allergenes";

@Component({
  selector: 'app-preferencesanddiet',
  templateUrl: './preferencesanddiet.component.html',
  styleUrls: ['./preferencesanddiet.component.scss']
})

export class PreferencesanddietComponent implements OnInit {
  public allergene: Allergene[] = [];
  public traces: Allergene[] = [];
  public diets: Allergene[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.allergielist.sort();
    this.dietlist.sort();

    for (let allergie of this.allergielist) {
      this.allergene.push({id: "allergie" + allergie, name: allergie, disabled: false});
      this.traces.push({id: "tracesof" + allergie, name: allergie, disabled: false});
    }

    for (let diet of this.dietlist) {
      this.diets.push({id: diet, name: diet, disabled: false});
    }
  }

  allergielist = ["Eier", "Erdnuss", "Gluten", "Sesam", "Senf", "Lupine", "Sulfite", "Nuss", "Weichtiere", "Krebstiere", "Fische", "Soja", "Sellerie", "Milch"];
  dietlist = ["Vegetarisch", "Pescetarisch", "Vegan"];

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
      }
    } else {
      for (let i = 0; i < this.diets.length; i++) {
        if (this.diets[i].id !== name) {
          this.diets[i].disabled = false;
        }
      }
    }
  }

  onClickNext() {
    // ROUTING
  }
}



