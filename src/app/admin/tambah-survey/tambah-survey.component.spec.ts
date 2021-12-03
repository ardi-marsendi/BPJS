import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahSurveyComponent } from './tambah-survey.component';

describe('TambahSurveyComponent', () => {
  let component: TambahSurveyComponent;
  let fixture: ComponentFixture<TambahSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TambahSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
