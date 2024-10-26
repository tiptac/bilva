import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BilvaComponent } from './home.component';

describe('BilvaComponent', () => {
  let component: BilvaComponent;
  let fixture: ComponentFixture<BilvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BilvaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BilvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
