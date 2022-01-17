import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeitraegeComponent } from './beitraege.component';

describe('BeitraegeComponent', () => {
  let component: BeitraegeComponent;
  let fixture: ComponentFixture<BeitraegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeitraegeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeitraegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
