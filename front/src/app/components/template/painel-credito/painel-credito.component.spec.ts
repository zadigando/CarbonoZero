import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelCreditoComponent } from './painel-credito.component';

describe('PainelCreditoComponent', () => {
  let component: PainelCreditoComponent;
  let fixture: ComponentFixture<PainelCreditoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PainelCreditoComponent]
    });
    fixture = TestBed.createComponent(PainelCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
