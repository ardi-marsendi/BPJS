import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahSpComponent } from './tambah-sp.component';

describe('TambahSpComponent', () => {
  let component: TambahSpComponent;
  let fixture: ComponentFixture<TambahSpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TambahSpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahSpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
