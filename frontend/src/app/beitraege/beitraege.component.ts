import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

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
  selector: 'app-beitraege',
  templateUrl: './beitraege.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./beitraege.component.scss']
})
export class BeitraegeComponent implements OnInit {

  constructor() { }

  displayedBeitraege: beitragType[] = [
    {
      name: "Apfel",
      image: "/assets/Logo.PNG",
      rating: 5,
      user: "niklas",
      allergens: ["c2c", "aa4"],
      spuren: ["spur 1", "spur 2"],
      art: "Vegan"
    },
    {
      name: "Banane",
      image: "/assets/Logo.PNG",
      rating: 3,
      user: "niklas",
      allergens: ["c2c", "aa4"],
      spuren: ["spur 1", "spur 2"],
      art: "Vegan"
    },
    {
      name: "Pudding",
      image: "/assets/Logo.PNG",
      rating: 3,
      user: "niklas",
      allergens: ["c2c", "aa4","xx1", "xyzS"],
      spuren: ["spur 1", "spur 2"],
      art: "Vegetarisch"
    },
    {
      name: "Schokolade",
      image: "/assets/Logo.PNG",
      rating: 3,
      user: "niklas",
      allergens: ["c2c", "aa4"],
      spuren: ["spur 1", "spur 2"],
      art: "Vegetarisch"
    }
  ];
  ngOnInit(): void {
  }

}
