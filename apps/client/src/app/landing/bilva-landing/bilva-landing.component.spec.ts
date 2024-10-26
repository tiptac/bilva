import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BilvaLandingComponent } from './bilva-landing.component';

describe('BilvaLandingComponent', () => {
  let component: BilvaLandingComponent;
  let fixture: ComponentFixture<BilvaLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BilvaLandingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BilvaLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
