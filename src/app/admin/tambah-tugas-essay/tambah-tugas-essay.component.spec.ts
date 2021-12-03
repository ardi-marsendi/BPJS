import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahTugasEssayComponent } from './tambah-tugas-essay.component';

describe('TambahTugasEssayComponent', () => {
  let component: TambahTugasEssayComponent;
  let fixture: ComponentFixture<TambahTugasEssayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TambahTugasEssayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahTugasEssayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
