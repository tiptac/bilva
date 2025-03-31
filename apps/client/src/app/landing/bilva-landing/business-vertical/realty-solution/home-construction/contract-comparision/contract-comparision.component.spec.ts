import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContractComparisionComponent } from './contract-comparision.component';

describe('ContractComparisionComponent', () => {
  let component: ContractComparisionComponent;
  let fixture: ComponentFixture<ContractComparisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractComparisionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContractComparisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
