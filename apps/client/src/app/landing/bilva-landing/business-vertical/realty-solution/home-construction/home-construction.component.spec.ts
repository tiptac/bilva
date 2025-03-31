import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeConstructionComponent } from './home-construction.component';

describe('HomeConstructionComponent', () => {
  let component: HomeConstructionComponent;
  let fixture: ComponentFixture<HomeConstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeConstructionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
