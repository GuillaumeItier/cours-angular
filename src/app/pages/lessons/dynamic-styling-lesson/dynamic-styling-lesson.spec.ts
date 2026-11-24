import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamicStylingLesson } from './dynamic-styling-lesson';

describe('DynamicStylingLesson', () => {
  let component: DynamicStylingLesson;
  let fixture: ComponentFixture<DynamicStylingLesson>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicStylingLesson],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicStylingLesson);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
