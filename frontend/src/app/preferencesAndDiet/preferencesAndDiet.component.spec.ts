import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PreferencesAndDietComponent} from './preferencesAndDiet.component';

describe('PreferencesAndDietComponent', () => {
  let component: PreferencesAndDietComponent;
  let fixture: ComponentFixture<PreferencesAndDietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreferencesAndDietComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferencesAndDietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
