import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-preferencesanddiet',
  templateUrl: './preferencesanddiet.component.html',
  styleUrls: ['./preferencesanddiet.component.scss']
})
export class PreferencesanddietComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  allergies = ["Eier","Erdnuss","Gluten","Sesam","Senf","Lupine","Sulfite","Nuss","Weichtiere","Krebstiere","Fische","Soja","Sellerie","Milch"];
  diets = ["Vegetarisch","Pescetarisch","Vegan"];

  onClickNext() {
    // ROUTING
  }

  onChangeAllergies() {
    // ON CHANGE CHECKBOX IN CATEGORY ALLERGIES
  }

  onChangeTracesOf() {
    // ON CHANGE CHECKBOX IN CATEGORY TRACES OF
  }

  onChangeDiet() {
    // ON CHANGE CHECKBOX IN CATEGORY DIET
  }

}

