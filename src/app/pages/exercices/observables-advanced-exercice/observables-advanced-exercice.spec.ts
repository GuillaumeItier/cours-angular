import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ObservablesAdvancedExercice } from './observables-advanced-exercice';

describe('ObservablesAdvancedExercice', () => {
  let component: ObservablesAdvancedExercice;
  let fixture: ComponentFixture<ObservablesAdvancedExercice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservablesAdvancedExercice],
    }).compileComponents();

    fixture = TestBed.createComponent(ObservablesAdvancedExercice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
