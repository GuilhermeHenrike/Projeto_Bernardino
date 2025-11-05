import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcoesMainComponent } from './opcoes-main.component';

describe('OpcoesMainComponent', () => {
  let component: OpcoesMainComponent;
  let fixture: ComponentFixture<OpcoesMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpcoesMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpcoesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
