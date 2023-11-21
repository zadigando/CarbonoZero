import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarProjetoComponent } from './deletar-projeto.component';

describe('DeletarProjetoComponent', () => {
  let component: DeletarProjetoComponent;
  let fixture: ComponentFixture<DeletarProjetoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletarProjetoComponent]
    });
    fixture = TestBed.createComponent(DeletarProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
