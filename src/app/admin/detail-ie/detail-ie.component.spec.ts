import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailIeComponent } from './detail-ie.component';

describe('DetailIeComponent', () => {
  let component: DetailIeComponent;
  let fixture: ComponentFixture<DetailIeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailIeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailIeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
