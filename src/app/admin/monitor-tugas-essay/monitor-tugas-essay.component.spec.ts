import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorTugasEssayComponent } from './monitor-tugas-essay.component';

describe('MonitorTugasEssayComponent', () => {
  let component: MonitorTugasEssayComponent;
  let fixture: ComponentFixture<MonitorTugasEssayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitorTugasEssayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorTugasEssayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
