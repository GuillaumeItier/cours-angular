import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListRenderingLesson } from './list-rendering-lesson';

describe('ListRenderingLesson', () => {
  let component: ListRenderingLesson;
  let fixture: ComponentFixture<ListRenderingLesson>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListRenderingLesson],
    }).compileComponents();

    fixture = TestBed.createComponent(ListRenderingLesson);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
