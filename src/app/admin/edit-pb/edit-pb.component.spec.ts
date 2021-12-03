import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPbComponent } from './edit-pb.component';

describe('EditPbComponent', () => {
  let component: EditPbComponent;
  let fixture: ComponentFixture<EditPbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
