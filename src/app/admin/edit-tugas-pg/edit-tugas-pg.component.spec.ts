import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTugasPgComponent } from './edit-tugas-pg.component';

describe('EditTugasPgComponent', () => {
  let component: EditTugasPgComponent;
  let fixture: ComponentFixture<EditTugasPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTugasPgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTugasPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
