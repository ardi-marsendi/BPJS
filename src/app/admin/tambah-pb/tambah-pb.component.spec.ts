import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahPbComponent } from './tambah-pb.component';

describe('TambahPbComponent', () => {
  let component: TambahPbComponent;
  let fixture: ComponentFixture<TambahPbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TambahPbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahPbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
