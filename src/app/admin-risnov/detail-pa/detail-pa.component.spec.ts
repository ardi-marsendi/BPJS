import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPaComponent } from './detail-pa.component';

describe('DetailPaComponent', () => {
  let component: DetailPaComponent;
  let fixture: ComponentFixture<DetailPaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
