import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalSurveyComponent } from './hal-survey.component';

describe('HalSurveyComponent', () => {
  let component: HalSurveyComponent;
  let fixture: ComponentFixture<HalSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HalSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HalSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
