import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BilvaProjectsSlideComponent } from '../bilva-projects-slide.component';

describe('BilvaProjectsSlideComponent', () => {
  let component: BilvaProjectsSlideComponent;
  let fixture: ComponentFixture<BilvaProjectsSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BilvaProjectsSlideComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BilvaProjectsSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
