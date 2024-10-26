import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BilvaSlideComponent } from './bilva-slide.component';

describe('BilvaSlideComponent', () => {
  let component: BilvaSlideComponent;
  let fixture: ComponentFixture<BilvaSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BilvaSlideComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BilvaSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
