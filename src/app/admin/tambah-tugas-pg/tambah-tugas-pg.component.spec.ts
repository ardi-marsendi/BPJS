import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahTugasPgComponent } from './tambah-tugas-pg.component';

describe('TambahTugasPgComponent', () => {
  let component: TambahTugasPgComponent;
  let fixture: ComponentFixture<TambahTugasPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TambahTugasPgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahTugasPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
