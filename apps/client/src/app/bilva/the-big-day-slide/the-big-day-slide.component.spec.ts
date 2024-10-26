import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TheBigDaySlideComponent } from './the-big-day-slide.component';

describe('TheBigDaySlideComponent', () => {
  let component: TheBigDaySlideComponent;
  let fixture: ComponentFixture<TheBigDaySlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheBigDaySlideComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TheBigDaySlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
