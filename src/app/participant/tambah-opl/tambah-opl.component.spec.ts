import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahOplComponent } from './tambah-opl.component';

describe('TambahOplComponent', () => {
  let component: TambahOplComponent;
  let fixture: ComponentFixture<TambahOplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TambahOplComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahOplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
