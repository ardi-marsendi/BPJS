import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahIeComponent } from './tambah-ie.component';

describe('TambahIeComponent', () => {
  let component: TambahIeComponent;
  let fixture: ComponentFixture<TambahIeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TambahIeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahIeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
