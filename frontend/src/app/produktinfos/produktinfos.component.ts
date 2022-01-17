import { Component, OnInit } from '@angular/core';

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

  allergene: string[] = ["allergen 1", "allergen 2", "allergen 3"];
  spurenelemente: string[] = ["spur 1", "spur 2", "spur 3"];
  beitrag: beitragType = {
    name: "Apfel",
    image: "/assets/Logo.PNG",
    rating: 5,
    user: "niklas",
    allergens: ["c2c", "aa4"],
    spuren: ["spur 1", "Spur 2"],
    art: "Vegan"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
