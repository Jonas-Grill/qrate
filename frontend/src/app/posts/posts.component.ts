import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

export interface postType {
  name: string,
  image: string,
  rating: number,
  user: string,
  allergens: string[],
  traces: string[],
  type: string
}

@Component({
  selector: 'app-beitraege',
  templateUrl: './posts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor() { }

  displayedPosts: postType[] = [
    {
      name: "Apfel",
      image: "/assets/Logo.PNG",
      rating: 5,
      user: "niklas",
      allergens: ["c2c", "aa4"],
      traces: ["trace 1", "trace 2"],
      type: "Vegan"
    },
    {
      name: "Banane",
      image: "/assets/Logo.PNG",
      rating: 3,
      user: "niklas",
      allergens: ["c2c", "aa4"],
      traces: ["trace 1", "trace 2"],
      type: "Vegan"
    },
    {
      name: "Pudding",
      image: "/assets/Logo.PNG",
      rating: 3,
      user: "niklas",
      allergens: ["c2c", "aa4", "xx1", "xyzS"],
      traces: ["trace 1", "trace 2"],
      type: "Vegetarisch"
    },
    {
      name: "Schokolade",
      image: "/assets/Logo.PNG",
      rating: 3,
      user: "niklas",
      allergens: ["c2c", "aa4"],
      traces: ["trace 1", "trace 2"],
      type: "Vegetarisch"
    }
  ];
  ngOnInit(): void {
  }

}
