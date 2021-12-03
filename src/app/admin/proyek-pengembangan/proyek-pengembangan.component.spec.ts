import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyekPengembanganComponent } from './proyek-pengembangan.component';

describe('ProyekPengembanganComponent', () => {
  let component: ProyekPengembanganComponent;
  let fixture: ComponentFixture<ProyekPengembanganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyekPengembanganComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyekPengembanganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
