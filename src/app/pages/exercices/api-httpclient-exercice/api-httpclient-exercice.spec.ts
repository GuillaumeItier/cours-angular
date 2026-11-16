import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiHttpclientExercice } from './api-httpclient-exercice';

describe('ObservablesHttpExercice', () => {
  let component: ApiHttpclientExercice;
  let fixture: ComponentFixture<ApiHttpclientExercice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiHttpclientExercice],
    }).compileComponents();

    fixture = TestBed.createComponent(ApiHttpclientExercice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
