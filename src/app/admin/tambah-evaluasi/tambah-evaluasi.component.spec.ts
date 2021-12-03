import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahEvaluasiComponent } from './tambah-evaluasi.component';

describe('TambahEvaluasiComponent', () => {
  let component: TambahEvaluasiComponent;
  let fixture: ComponentFixture<TambahEvaluasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TambahEvaluasiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahEvaluasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
