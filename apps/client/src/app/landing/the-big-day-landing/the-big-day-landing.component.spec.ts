import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TheBigDayLandingComponent } from './the-big-day-landing.component';

describe('TheBigDayLandingComponent', () => {
  let component: TheBigDayLandingComponent;
  let fixture: ComponentFixture<TheBigDayLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheBigDayLandingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TheBigDayLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
