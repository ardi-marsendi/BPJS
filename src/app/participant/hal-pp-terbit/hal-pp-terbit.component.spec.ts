import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalPpTerbitComponent } from './hal-pp-terbit.component';

describe('HalPpTerbitComponent', () => {
  let component: HalPpTerbitComponent;
  let fixture: ComponentFixture<HalPpTerbitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HalPpTerbitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HalPpTerbitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
