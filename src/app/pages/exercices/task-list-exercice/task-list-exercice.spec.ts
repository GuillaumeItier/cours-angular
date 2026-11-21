import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskListExercice } from './task-list-exercice';

describe('TaskListExercice', () => {
  let component: TaskListExercice;
  let fixture: ComponentFixture<TaskListExercice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskListExercice],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskListExercice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
