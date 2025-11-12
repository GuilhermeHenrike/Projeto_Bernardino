import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaAtendiComponent } from './tela-atendi.component';

describe('TelaAtendiComponent', () => {
  let component: TelaAtendiComponent;
  let fixture: ComponentFixture<TelaAtendiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaAtendiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaAtendiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
