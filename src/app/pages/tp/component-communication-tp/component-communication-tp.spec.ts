import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentCommunicationTp } from './component-communication-tp';

describe('ComponentCommunicationTp', () => {
  let component: ComponentCommunicationTp;
  let fixture: ComponentFixture<ComponentCommunicationTp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentCommunicationTp],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentCommunicationTp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
