import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PreferencesanddietComponent} from './preferencesanddiet.component';

describe('PreferencesanddietComponent', () => {
  let component: PreferencesanddietComponent;
  let fixture: ComponentFixture<PreferencesanddietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreferencesanddietComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferencesanddietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
