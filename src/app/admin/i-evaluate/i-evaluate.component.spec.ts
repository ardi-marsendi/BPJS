import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IEvaluateComponent } from './i-evaluate.component';

describe('IEvaluateComponent', () => {
  let component: IEvaluateComponent;
  let fixture: ComponentFixture<IEvaluateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IEvaluateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IEvaluateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
