import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConditionalRenderingLesson } from './conditional-rendering-lesson';

describe('ConditionalRenderingLesson', () => {
  let component: ConditionalRenderingLesson;
  let fixture: ComponentFixture<ConditionalRenderingLesson>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConditionalRenderingLesson],
    }).compileComponents();

    fixture = TestBed.createComponent(ConditionalRenderingLesson);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
