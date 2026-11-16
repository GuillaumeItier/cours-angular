import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ObservableSimpleExercice } from './observable-simple-exercice';

describe('ObservableSimpleExercice', () => {
  let component: ObservableSimpleExercice;
  let fixture: ComponentFixture<ObservableSimpleExercice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableSimpleExercice],
    }).compileComponents();

    fixture = TestBed.createComponent(ObservableSimpleExercice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
