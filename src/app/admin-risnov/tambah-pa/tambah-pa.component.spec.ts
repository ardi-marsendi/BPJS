import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahPaComponent } from './tambah-pa.component';

describe('TambahPaComponent', () => {
  let component: TambahPaComponent;
  let fixture: ComponentFixture<TambahPaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TambahPaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahPaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
