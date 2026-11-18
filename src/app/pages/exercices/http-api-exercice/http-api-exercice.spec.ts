import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpApiExercice } from './http-api-exercice';

describe('HttpApiExercice', () => {
  let component: HttpApiExercice;
  let fixture: ComponentFixture<HttpApiExercice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpApiExercice],
    }).compileComponents();

    fixture = TestBed.createComponent(HttpApiExercice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
