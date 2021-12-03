import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPpComponent } from './detail-pp.component';

describe('DetailPpComponent', () => {
  let component: DetailPpComponent;
  let fixture: ComponentFixture<DetailPpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
