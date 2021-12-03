import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorTugasComponent } from './monitor-tugas.component';

describe('MonitorTugasComponent', () => {
  let component: MonitorTugasComponent;
  let fixture: ComponentFixture<MonitorTugasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitorTugasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorTugasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
