import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahKpComponent } from './tambah-kp.component';

describe('TambahKpComponent', () => {
  let component: TambahKpComponent;
  let fixture: ComponentFixture<TambahKpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TambahKpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahKpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
