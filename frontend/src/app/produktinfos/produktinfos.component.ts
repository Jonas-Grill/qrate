import { Component, OnInit } from '@angular/core';
import { foodRequests } from '../backendrequests/fooddatarequests';

export interface postType {
  name: string,
  image: string,
  allergens: string[],
  traces: string[],
  diet: string
}

@Component({
  selector: 'app-produktinfos',
  templateUrl: './produktinfos.component.html',
  styleUrls: ['./produktinfos.component.scss']
})
export class ProduktinfosComponent implements OnInit {

  post: postType = {
    name: "",
    image: "/assets/Logo.PNG",
    allergens: [],
    traces: [],
    diet: ""
  };
  constructor(private foodApi: foodRequests) { }

  ngOnInit(): void {
    let barcode = sessionStorage.getItem('barcode');
    this.foodApi.getFoodItemData(String(barcode), true).done((result) => {
      this.post.name = result.name;
      this.post.diet = result.diet;
      for (let i = 0; i < result.allergens.length; i++) {
        if (result.allergens[i].tracesOf === true) {
          this.post.traces.push(result.allergens[i].name);
        } else {
          this.post.allergens.push(result.allergens[i].name);
        }
      }

    })
  }

}
