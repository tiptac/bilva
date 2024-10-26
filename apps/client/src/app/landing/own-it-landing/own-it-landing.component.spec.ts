import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OwnItLandingComponent } from './own-it-landing.component';

describe('OwnItLandingComponent', () => {
  let component: OwnItLandingComponent;
  let fixture: ComponentFixture<OwnItLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OwnItLandingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OwnItLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
