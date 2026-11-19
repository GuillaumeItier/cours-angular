import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimalInputExercice } from './animal-input-exercice';

describe('AnimalInputExercice', () => {
  let component: AnimalInputExercice;
  let fixture: ComponentFixture<AnimalInputExercice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalInputExercice],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimalInputExercice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
