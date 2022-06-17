import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastSelectedDialogComponent } from './forecast-selected-dialog.component';

describe('ForecastSelectedDialogComponent', () => {
  let component: ForecastSelectedDialogComponent;
  let fixture: ComponentFixture<ForecastSelectedDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastSelectedDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastSelectedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
