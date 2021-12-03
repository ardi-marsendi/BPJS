import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramBelajarComponent } from './program-belajar.component';

describe('ProgramBelajarComponent', () => {
  let component: ProgramBelajarComponent;
  let fixture: ComponentFixture<ProgramBelajarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramBelajarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramBelajarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
