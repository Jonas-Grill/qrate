import {Component, OnInit, Optional} from '@angular/core';
import {Allergene} from "./allergenes";
import {NbWindowControlButtonsConfig, NbWindowService} from "@nebular/theme";
import {DialogLogoutComponent} from "../dialogLogout/dialogLogout.component";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public allergene: Allergene[] = [];
  public traces: Allergene[] = [];
  public diets: Allergene[] = [];

  constructor(@Optional() private windowService: NbWindowService) {}

  ngOnInit(): void {
    this.allergielist.sort();
    this.dietlist.sort();

    for (let allergie of this.allergielist){
      this.allergene.push({id: "allergie"+allergie, name:allergie, disabled: false});
      this.traces.push({id: "tracesof"+allergie, name:allergie, disabled: false});
    }

    for (let diet of this.dietlist){
      this.diets.push({id:diet, name:diet, disabled: false});
    }
  }

  allergielist = ["Eier","Erdnuss","Gluten","Sesam","Senf","Lupine","Sulfite","Nuss","Weichtiere","Krebstiere","Fische","Soja","Sellerie","Milch"];
  dietlist = ["Vegetarisch","Pescetarisch","Vegan"];
  username = 'Max Mustermann';
  usermail = 'max.mustermann@beispielmail.com';
  userlevel = 'Enthusiastischer Essenskenner';

  openWindow() {
    const buttonsConfig: NbWindowControlButtonsConfig = {
      minimize: false,
      maximize: false,
      fullScreen: false,
    };

    this.windowService.open(DialogLogoutComponent, { title: `Abmelden`, buttons: buttonsConfig });
  }

  onChangeAllergies(selected: any, name: string): void {
    // ON CHANGE CHECKBOX IN CATEGORY ALLERGIES
    if (selected.target.checked){
      if (selected.currentTarget.id.includes("allergie")){
        for (let i=0; i<this.traces.length; i++){
          if (this.traces[i].id === "tracesof"+name){
            this.traces[i].disabled = true;
          }
        }
      }else if (selected.currentTarget.id.includes("tracesof")){
        for (let i=0; i<this.allergene.length; i++){
          if (this.allergene[i].id === "allergie"+name){
            this.allergene[i].disabled = true;
          }
        }
      }
    }else{
      if (selected.currentTarget.id.includes("allergie")){
        for (let i=0; i<this.traces.length; i++){
          if (this.traces[i].id === "tracesof"+name){
            this.traces[i].disabled = false;
          }
        }
      }else if (selected.currentTarget.id.includes("tracesof")){
        for (let i=0; i<this.allergene.length; i++){
          if (this.allergene[i].id === "allergie"+name){
            this.allergene[i].disabled = false;
          }
        }
      }
    }
  }

  onChangeDiet(selected: any, name: string): void {
    // ON CHANGE CHECKBOX IN CATEGORY DIET
    if (selected.target.checked){
      for (let i=0; i<this.diets.length; i++){
        if (this.diets[i].id !== name){
          this.diets[i].disabled = true;
        }
      }
    }else{
      for (let i=0; i<this.diets.length; i++){
        if (this.diets[i].id !== name){
          this.diets[i].disabled = false;
        }
      }
    }
  }
}