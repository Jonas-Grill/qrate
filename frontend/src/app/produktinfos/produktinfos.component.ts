import { Component, OnInit } from '@angular/core';
import { foodRequests } from '../backendrequests/fooddatarequests';

export interface beitragType {
  name: string,
  image: string,
  allergens: string[],
  spuren: string[],
  art: string
}

@Component({
  selector: 'app-produktinfos',
  templateUrl: './produktinfos.component.html',
  styleUrls: ['./produktinfos.component.scss']
})
export class ProduktinfosComponent implements OnInit {

  beitrag: beitragType = {
    name: "",
    image: "/assets/Logo.PNG",
    allergens: [],
    spuren: [],
    art: ""
  };
  constructor(private foodApi: foodRequests) { }

  ngOnInit(): void {
    let barcode = sessionStorage.getItem('barcode');
    this.foodApi.getFoodItemData(String(barcode), true).done((result) => {
      console.log(result);
      this.beitrag.name = result.name;
      this.beitrag.art = result.diet;
      for (let i = 0; i < result.allergens.length; i++) {
        if (result.allergens[i].tracesOf === true) {
          this.beitrag.spuren.push(result.allergens[i].name);
        } else {
          this.beitrag.allergens.push(result.allergens[i].name);
        }
      }

    })
  }

}
