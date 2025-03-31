import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TheBigDayComponent } from './the-big-day.component';

describe('TheBigDayComponent', () => {
  let component: TheBigDayComponent;
  let fixture: ComponentFixture<TheBigDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheBigDayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TheBigDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
