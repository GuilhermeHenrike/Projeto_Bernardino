import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagagemComponent } from './bagagem.component';

describe('BagagemComponent', () => {
  let component: BagagemComponent;
  let fixture: ComponentFixture<BagagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BagagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BagagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
