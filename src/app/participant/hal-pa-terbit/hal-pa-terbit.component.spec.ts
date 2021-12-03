import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalPaTerbitComponent } from './hal-pa-terbit.component';

describe('HalPaTerbitComponent', () => {
  let component: HalPaTerbitComponent;
  let fixture: ComponentFixture<HalPaTerbitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HalPaTerbitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HalPaTerbitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
