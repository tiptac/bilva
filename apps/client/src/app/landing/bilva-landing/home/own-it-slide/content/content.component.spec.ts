import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OwnItSlideContentComponent } from './content.component';

describe('HeroComponent', () => {
  let component: OwnItSlideContentComponent;
  let fixture: ComponentFixture<OwnItSlideContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OwnItSlideContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OwnItSlideContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
