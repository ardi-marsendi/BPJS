import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahPpComponent } from './tambah-pp.component';

describe('TambahPpComponent', () => {
  let component: TambahPpComponent;
  let fixture: ComponentFixture<TambahPpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TambahPpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahPpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
