import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TwoWayDataBindingExercice } from './two-way-data-binding-exercice';

describe('TwoWayDataBindingExercice', () => {
  let component: TwoWayDataBindingExercice;
  let fixture: ComponentFixture<TwoWayDataBindingExercice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoWayDataBindingExercice],
    }).compileComponents();

    fixture = TestBed.createComponent(TwoWayDataBindingExercice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
