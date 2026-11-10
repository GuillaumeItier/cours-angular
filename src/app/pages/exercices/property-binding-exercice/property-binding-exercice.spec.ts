import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PropertyBindingExercice } from './property-binding-exercice';

describe('PropertyBindingExercice', () => {
  let component: PropertyBindingExercice;
  let fixture: ComponentFixture<PropertyBindingExercice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyBindingExercice],
    }).compileComponents();

    fixture = TestBed.createComponent(PropertyBindingExercice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
