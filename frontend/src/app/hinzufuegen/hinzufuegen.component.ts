import { ChangeDetectionStrategy, Component, ViewChild, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { NbTagComponent } from '@nebular/theme';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
  inputFormControl: FormControl = new FormControl();
  inputTagControl: FormControl = new FormControl();
  filteredControlOptions$!: Observable<string[]>;
  filteredTags$!: Observable<string[]>;
  value: string | undefined;

  @ViewChild('autoInput') input: any;
  @ViewChild('tagInput') tagInput: any;

  constructor() { }

  ngOnInit(): void {
    this.options = ['Option 1', 'Option 2', 'Option 3'];
    this.filteredControlOptions$ = of(this.options);
    this.filteredControlOptions$ = this.inputFormControl.valueChanges
      .pipe(
        startWith(''),
        map(filterString => this.filter(filterString)),
      );
    this.filteredTags$ = of(this.tags);
    this.filteredTags$ = this.inputTagControl.valueChanges
      .pipe(
        startWith(''),
        map(filterStringTag => this.filterTag(filterStringTag)),
      );
  }

  onScanClick(element: any): void {
    this.isScanned = true;
    element.textContent = "Cr-Code ändern"
  }
  onBildClick(element: any): void {
    this.isBild = true;
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
  }
  //Change Funktion für Allergene
  onSelectionChange() {
    this.tags.push(this.input.nativeElement.value);
    this.input.nativeElement.value = '';
    this.filteredControlOptions$ = of(this.options);
    this.filteredTags$ = of(this.tags);
  }
  //Change Funktion für Spuren
  onSelectionTagChange() {
    this.spurenTags.push(this.input.nativeElement.value);
    this.tagInput.nativeElement.value = '';
    this.filteredTags$ = of(this.spurenTags);
  }
}
