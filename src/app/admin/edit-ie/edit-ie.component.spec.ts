import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIeComponent } from './edit-ie.component';

describe('EditIeComponent', () => {
  let component: EditIeComponent;
  let fixture: ComponentFixture<EditIeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditIeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditIeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
