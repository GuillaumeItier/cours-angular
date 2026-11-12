import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignalExercice } from './signal-exercice';

describe('SignalExercice', () => {
  let component: SignalExercice;
  let fixture: ComponentFixture<SignalExercice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalExercice],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalExercice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
