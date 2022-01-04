import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolventeTableComponent } from './solvente-table.component';

describe('SolventeTableComponent', () => {
  let component: SolventeTableComponent;
  let fixture: ComponentFixture<SolventeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolventeTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolventeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
