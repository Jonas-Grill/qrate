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

  constructor() { }

  ngOnInit(): void {
    this.allergielist.sort();
    this.dietlist.sort();

    for (let allergie of this.allergielist){
      this.allergene.push({id: "allergie"+allergie, name:allergie, checked: false});
      this.traces.push({id: "tracesof"+allergie, name:allergie, checked: false});
    }

    for (let diet of this.dietlist){
      this.diets.push({id:diet, name:diet, checked: false});
    }
  }

  allergielist = ["Eier","Erdnuss","Gluten","Sesam","Senf","Lupine","Sulfite","Nuss","Weichtiere","Krebstiere","Fische","Soja","Sellerie","Milch"];
  dietlist = ["Vegetarisch","Pescetarisch","Vegan"];

  onClickNext() {
    // ROUTING
  }

  onChangeAllergies(id: string) {
    // ON CHANGE CHECKBOX IN CATEGORY ALLERGIES
    let element = document.getElementById(id);

  }

  onChangeTracesOf() {
    // ON CHANGE CHECKBOX IN CATEGORY TRACES OF
  }

  onChangeDiet() {
    // ON CHANGE CHECKBOX IN CATEGORY DIET
  }

}



