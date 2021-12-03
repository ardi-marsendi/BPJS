import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramAndalanComponent } from './program-andalan.component';

describe('ProgramAndalanComponent', () => {
  let component: ProgramAndalanComponent;
  let fixture: ComponentFixture<ProgramAndalanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramAndalanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramAndalanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
