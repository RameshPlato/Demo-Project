import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSpecialtyComponent } from './our-specialty.component';

describe('OurSpecialtyComponent', () => {
  let component: OurSpecialtyComponent;
  let fixture: ComponentFixture<OurSpecialtyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurSpecialtyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurSpecialtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
