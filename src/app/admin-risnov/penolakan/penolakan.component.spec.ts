import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenolakanComponent } from './penolakan.component';

describe('PenolakanComponent', () => {
  let component: PenolakanComponent;
  let fixture: ComponentFixture<PenolakanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PenolakanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PenolakanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
