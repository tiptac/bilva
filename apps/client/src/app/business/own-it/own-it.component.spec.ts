import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OwnItComponent } from './own-it.component';

describe('OwnItComponent', () => {
  let component: OwnItComponent;
  let fixture: ComponentFixture<OwnItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OwnItComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OwnItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
