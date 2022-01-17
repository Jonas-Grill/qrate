import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduktinfosComponent } from './produktinfos.component';

describe('ProduktinfosComponent', () => {
  let component: ProduktinfosComponent;
  let fixture: ComponentFixture<ProduktinfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduktinfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduktinfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
