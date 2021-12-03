import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPbComponent } from './detail-pb.component';

describe('DetailPbComponent', () => {
  let component: DetailPbComponent;
  let fixture: ComponentFixture<DetailPbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
