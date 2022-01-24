import { Component, OnInit } from '@angular/core';
import { foodRequests } from '../backendrequests/fooddatarequests';

export interface beitragType {
  name: string,
  image: string,
  rating: number,
  user: string,
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
    rating: 0,
    user: "",
    allergens: [],
    spuren: [],
    art: ""
  };
  constructor(private foodApi: foodRequests) { }

  ngOnInit(): void {
    let barcode = sessionStorage.getItem('barcode');
    this.foodApi.getFoodItemData(String(barcode), true).done((result) => {
      console.log(result);
      this.beitrag.name = result.fooditem.name;
      this.beitrag.rating = result.result;
      this.beitrag.user = result.creator;
      this.beitrag.allergens 

    })
  }

}
