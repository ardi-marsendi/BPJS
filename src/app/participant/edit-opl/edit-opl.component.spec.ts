import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOplComponent } from './edit-opl.component';

describe('EditOplComponent', () => {
  let component: EditOplComponent;
  let fixture: ComponentFixture<EditOplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOplComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
