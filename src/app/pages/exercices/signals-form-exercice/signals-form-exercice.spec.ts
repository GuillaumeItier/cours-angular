import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignalsFormExercice } from './signals-form-exercice';

describe('SignalsFormExercice', () => {
  let component: SignalsFormExercice;
  let fixture: ComponentFixture<SignalsFormExercice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsFormExercice],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalsFormExercice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
