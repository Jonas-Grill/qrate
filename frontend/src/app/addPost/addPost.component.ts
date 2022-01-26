import {ChangeDetectionStrategy, Component, QueryList, ViewChild, ViewChildren, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {NbTagComponent} from '@nebular/theme';
import {NbPopoverDirective} from "@nebular/theme";
import {Router} from '@angular/router';
import {foodRequests} from '../backendRequests/foodDataRequests';

@Component({
  selector: 'app-hinzufuegen',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './addPost.component.html',
  styleUrls: ['./addPost.component.scss']
})
export class AddPostComponent implements OnInit {

  isScanned = false;
  isPicture = false;

  options: string[] = [];
  tags: string[] = [];
  tracesTags: string[] = [];
  usedAllergens: string[] = [];
  inputFormControl: FormControl = new FormControl();
  inputTagControl: FormControl = new FormControl();
  filteredControlOptions$!: Observable<string[]>;
  value: string | undefined;
  allergenPopover: any;
  tracesPopover: any;

  @ViewChild('autoInput') input: any;
  @ViewChild('tagInput') tagInput: any;
  @ViewChildren(NbPopoverDirective) popovers: QueryList<NbPopoverDirective> | undefined;

  constructor(private router: Router, private foodApi: foodRequests) {
  }

  ngOnInit(): void {
    this.foodApi.getAllAllergens().done((result) => {
      this.options = result;
      this.filteredControlOptions$ = of(this.options);
      this.filteredControlOptions$ = this.inputFormControl.valueChanges
        .pipe(
          startWith(''),
          map(filterString => this.filter(filterString)),
        );
    });
  }

  onScanClick(element: any): void {
    //this.isScanned = true;
    this.router.navigate(['/', 'barcodescanner']);
    element.textContent = "Cr-Code ändern"
  }

  onPictureClick(element: any): void {
    this.isPicture = true;
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
    const indexUsed = this.usedAllergens.indexOf(tagToRemove.text);
    if (indexUsed > -1) {
      this.usedAllergens.splice(indexUsed, 1);
    }
  }

  onTagSpurRemove(tagToRemove: NbTagComponent): void {
    const index = this.tracesTags.indexOf(tagToRemove.text);
    if (index > -1) {
      this.tracesTags.splice(index, 1);
    }
    const indexUsed = this.usedAllergens.indexOf(tagToRemove.text);
    if (indexUsed > -1) {
      this.usedAllergens.splice(indexUsed, 1);
    }
  }

  //Change Funktion für Allergene
  onSelectionChange() {
    let checker: boolean = false;
    for (let tag in this.usedAllergens) {
      if (this.usedAllergens[tag] == this.input.nativeElement.value) {
        this.input.nativeElement.value = '';
        checker = true;
        this.allergenPopover = "Dieses Allergen wurde bereits ausgewählt";
        this.popovers?.filter(item => item.popoverClass == "allergen").shift()?.show();
        setTimeout(() => {
          this.popovers?.filter(item => item.popoverClass == "allergen").shift()?.hide();
        }, 2000);
        break;
      }
    }
    if (!checker) {
      this.tags.push(this.input.nativeElement.value);
      this.usedAllergens.push(this.input.nativeElement.value);
      this.input.nativeElement.value = '';
      this.filteredControlOptions$ = of(this.options);
    }
  }

  //Change Funktion für Spuren
  onSelectionTagChange() {
    let checker: boolean = false;
    for (let tag in this.usedAllergens) {
      if (this.usedAllergens[tag] == this.tagInput.nativeElement.value) {
        this.tagInput.nativeElement.value = '';
        checker = true;
        this.tracesPopover = "Dieses Allergen wurde bereits ausgewählt";
        this.popovers?.filter(item => item.popoverClass == "traces").shift()?.show();
        setTimeout(() => {
          this.popovers?.filter(item => item.popoverClass == "traces").shift()?.hide();
        }, 2000);
        break;
      }
    }
    if (!checker) {
      this.tracesTags.push(this.tagInput.nativeElement.value);
      this.usedAllergens.push(this.tagInput.nativeElement.value);
      this.tagInput.nativeElement.value = '';
      this.filteredControlOptions$ = of(this.options);
    }
  }
}
