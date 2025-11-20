import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MviagemComponent } from './mviagem.component';

describe('MviagensComponent', () => {
  let component: MviagemComponent;
  let fixture: ComponentFixture<MviagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MviagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MviagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
