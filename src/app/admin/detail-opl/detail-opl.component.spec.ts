import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOplComponent } from './detail-opl.component';

describe('DetailOplComponent', () => {
  let component: DetailOplComponent;
  let fixture: ComponentFixture<DetailOplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailOplComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailOplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
