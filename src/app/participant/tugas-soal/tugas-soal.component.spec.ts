import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TugasSoalComponent } from './tugas-soal.component';

describe('TugasSoalComponent', () => {
  let component: TugasSoalComponent;
  let fixture: ComponentFixture<TugasSoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TugasSoalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TugasSoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
