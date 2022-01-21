import { getAllFooditemSuggestion } from './../../../../backend/repositories/fooditemSuggestionRepo';
import { ChangeDetectionStrategy, Component, QueryList, ViewChild, ViewChildren, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { NbTagComponent } from '@nebular/theme';
import {NbPopoverDirective} from "@nebular/theme";
import { Router} from '@angular/router';
import { getAllAllergens } from '../backendrequests/fooddatarequests';

@Component({
  selector: 'app-hinzufuegen',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hinzufuegen.component.html',
  styleUrls: ['./hinzufuegen.component.scss']
})
export class HinzufuegenComponent implements OnInit {

  isScanned = false;
  isBild = false;

  options: string[] = [];
  tags: string[] = [];
  spurenTags: string[] = [];
  usedAllergenes: string[] = [];
  inputFormControl: FormControl = new FormControl();
  inputTagControl: FormControl = new FormControl();
  filteredControlOptions$!: Observable<string[]>;
  value: string | undefined;
  allergenPopover: any;
  spurenPopover: any;

  @ViewChild('autoInput') input: any;
  @ViewChild('tagInput') tagInput: any;
  @ViewChildren(NbPopoverDirective) popovers: QueryList<NbPopoverDirective> | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
    let testArray: any = getAllAllergens();
    console.log(testArray);
    this.options = ['Option 1', 'Option 2', 'Option 3'];
    this.filteredControlOptions$ = of(this.options);
    this.filteredControlOptions$ = this.inputFormControl.valueChanges
      .pipe(
        startWith(''),
        map(filterString => this.filter(filterString)),
      );
  }

  onScanClick(element: any): void {
    //this.isScanned = true;
    this.router.navigate(['/', 'barcodescanner']);
    element.textContent = "Cr-Code ändern"
  }
  isScaned(): void {
    this.isScanned = true;
  }
  onBildClick(element: any): void {
    this.isBild = true;
    this.router.navigate(['/', 'barcodescanner']);
    element.textContent = "Bild ändern"
  }
  onSubmitClick(): void {

  }
  //Funktion für Allergene Filter
  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }

  //Funktion für Allergene Filter
  private filterTag(value: string): string[] {
    const filterValueTag = value.toLowerCase();
    return this.options.filter(optionValue => optionValue.toLowerCase().includes(filterValueTag));
  }

  onTagRemove(tagToRemove: NbTagComponent): void {
    const index = this.tags.indexOf(tagToRemove.text);
    if (index > -1) {
      this.tags.splice(index, 1);
    }
    const indexUsed = this.usedAllergenes.indexOf(tagToRemove.text);
    if (indexUsed > -1) {
      this.usedAllergenes.splice(indexUsed, 1);
    }
  }

  onTagSpurRemove(tagToRemove: NbTagComponent): void {
    const index = this.spurenTags.indexOf(tagToRemove.text);
    if (index > -1) {
      this.spurenTags.splice(index, 1);
    }
    const indexUsed = this.usedAllergenes.indexOf(tagToRemove.text);
    if (indexUsed > -1) {
      this.usedAllergenes.splice(indexUsed, 1);
    }
  }
  //Change Funktion für Allergene
  onSelectionChange() {
    let checker: boolean = false;
    for(let tag in this.usedAllergenes) {
      if(this.usedAllergenes[tag] == this.input.nativeElement.value) {
        this.input.nativeElement.value = '';
        checker = true;
        this.allergenPopover = "Dieses Allergen wurde bereits als Allergen oder Spurenelement ausgewählt";
        this.popovers?.filter(item => item.popoverClass == "allergen").shift()?.show();
        setTimeout(() => {
          this.popovers?.filter(item => item.popoverClass == "allergen").shift()?.hide();
        }, 2000);
        break;
      }
    }
    if(checker === false) {
      this.tags.push(this.input.nativeElement.value);
      this.usedAllergenes.push(this.input.nativeElement.value);
      this.input.nativeElement.value = '';
      this.filteredControlOptions$ = of(this.options);
    }
  }
  //Change Funktion für Spuren
  onSelectionTagChange() {
    let checker: boolean = false;
    for(let tag in this.usedAllergenes) {
      if(this.usedAllergenes[tag] == this.tagInput.nativeElement.value) {
        this.tagInput.nativeElement.value = '';
        checker = true;
        this.spurenPopover = "Dieses Allergen wurde bereits als Allergen oder Spurenelement ausgewählt";
        this.popovers?.filter(item => item.popoverClass == "spur").shift()?.show();
        setTimeout(() => {
          this.popovers?.filter(item => item.popoverClass == "spur").shift()?.hide();
        }, 2000);
        break;
      }
    }
    if(checker === false) {
      this.spurenTags.push(this.tagInput.nativeElement.value);
      this.usedAllergenes.push(this.tagInput.nativeElement.value);
      this.tagInput.nativeElement.value = '';
      this.filteredControlOptions$ = of(this.options);
    }
  }
}
