import {Component, OnInit, Optional} from '@angular/core';
import {Allergene} from "../preferencesAndDiet/allergens";
import {NbWindowControlButtonsConfig, NbWindowService} from "@nebular/theme";
import {DialogLogoutComponent} from "../dialogLogout/dialogLogout.component";
import {DialogChangePasswordComponent} from "../dialogChangePassword/dialogChangePassword.component";
import {postType} from "../posts/posts.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public allergene: Allergene[] = [];
  public traces: Allergene[] = [];
  public diets: Allergene[] = [];

  allergylist = ["Eier", "Erdnuss", "Gluten", "Sesam", "Senf", "Lupine", "Sulfite", "Nuss", "Weichtiere", "Krebstiere", "Fische", "Soja", "Sellerie", "Milch"];
  dietlist = ["Vegetarisch", "Pescetarisch", "Vegan"];
  username = 'Max Mustermann';
  usermail = 'max.mustermann@beispielmail.com';
  userlevel = 'Enthusiastischer Essenskenner';

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

  constructor(@Optional() private windowService: NbWindowService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.allergylist.sort();
    this.dietlist.sort();

    for (let allergy of this.allergylist) {
      this.allergene.push({id: "allergy" + allergy, name: allergy, disabled: false});
      this.traces.push({id: "tracesof" + allergy, name: allergy, disabled: false});
    }

    for (let diet of this.dietlist) {
      this.diets.push({id: diet, name: diet, disabled: false});
    }
  }

  openWindowLogout() {
    const buttonsConfig: NbWindowControlButtonsConfig = {
      minimize: false,
      maximize: false,
      fullScreen: false,
    };

    this.windowService.open(DialogLogoutComponent, {title: `Abmelden`, buttons: buttonsConfig});
  }

  openWindowPassword() {
    const buttonsConfig: NbWindowControlButtonsConfig = {
      minimize: false,
      maximize: false,
      fullScreen: false,
    };

    this.windowService.open(DialogChangePasswordComponent, {title: `Passwort ??ndern`, buttons: buttonsConfig});
  }

  onChangeAllergies(selected: any, name: string): void {
    // ON CHANGE CHECKBOX IN CATEGORY ALLERGIES
    if (selected.target.checked) {
      if (selected.currentTarget.id.includes("allergy")) {
        for (let i = 0; i < this.traces.length; i++) {
          if (this.traces[i].id === "tracesof" + name) {
            this.traces[i].disabled = true;
          }
        }
      } else if (selected.currentTarget.id.includes("tracesof")) {
        for (let i = 0; i < this.allergene.length; i++) {
          if (this.allergene[i].id === "allergy" + name) {
            this.allergene[i].disabled = true;
          }
        }
      }
    } else {
      if (selected.currentTarget.id.includes("allergy")) {
        for (let i = 0; i < this.traces.length; i++) {
          if (this.traces[i].id === "tracesof" + name) {
            this.traces[i].disabled = false;
          }
        }
      } else if (selected.currentTarget.id.includes("tracesof")) {
        for (let i = 0; i < this.allergene.length; i++) {
          if (this.allergene[i].id === "allergy" + name) {
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
}
