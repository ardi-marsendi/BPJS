import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahMateriComponent } from './tambah-materi.component';

describe('TambahMateriComponent', () => {
  let component: TambahMateriComponent;
  let fixture: ComponentFixture<TambahMateriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TambahMateriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahMateriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
