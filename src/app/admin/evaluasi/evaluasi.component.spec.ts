import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluasiComponent } from './evaluasi.component';

describe('EvaluasiComponent', () => {
  let component: EvaluasiComponent;
  let fixture: ComponentFixture<EvaluasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluasiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
