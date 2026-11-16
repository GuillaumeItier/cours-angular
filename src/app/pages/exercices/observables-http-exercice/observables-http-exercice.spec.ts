import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ObservablesHttpExercice } from './observables-http-exercice';

describe('ObservablesHttpExercice', () => {
  let component: ObservablesHttpExercice;
  let fixture: ComponentFixture<ObservablesHttpExercice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservablesHttpExercice],
    }).compileComponents();

    fixture = TestBed.createComponent(ObservablesHttpExercice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
