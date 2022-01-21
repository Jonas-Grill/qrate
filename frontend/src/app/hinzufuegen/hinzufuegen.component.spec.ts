import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HinzufuegenComponent } from './hinzufuegen.component';

describe('HinzufuegenComponent', () => {
  let component: HinzufuegenComponent;
  let fixture: ComponentFixture<HinzufuegenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HinzufuegenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HinzufuegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
