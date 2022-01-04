import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotesPeqTableComponent } from './lotes-peq-table.component';

describe('LotesPeqTableComponent', () => {
  let component: LotesPeqTableComponent;
  let fixture: ComponentFixture<LotesPeqTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LotesPeqTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LotesPeqTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
