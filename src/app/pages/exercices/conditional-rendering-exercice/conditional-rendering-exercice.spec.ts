import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConditionalRenderingExercice } from './conditional-rendering-exercice';

describe('ConditionalRenderingExercice', () => {
  let component: ConditionalRenderingExercice;
  let fixture: ComponentFixture<ConditionalRenderingExercice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConditionalRenderingExercice],
    }).compileComponents();

    fixture = TestBed.createComponent(ConditionalRenderingExercice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
