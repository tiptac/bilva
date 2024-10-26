import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OwnItSlideComponent } from './own-it-slide.component';

describe('OwnItSlideComponent', () => {
  let component: OwnItSlideComponent;
  let fixture: ComponentFixture<OwnItSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OwnItSlideComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OwnItSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
