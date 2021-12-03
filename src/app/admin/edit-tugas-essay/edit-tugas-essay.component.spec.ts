import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTugasEssayComponent } from './edit-tugas-essay.component';

describe('EditTugasEssayComponent', () => {
  let component: EditTugasEssayComponent;
  let fixture: ComponentFixture<EditTugasEssayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTugasEssayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTugasEssayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
