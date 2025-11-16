import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MviajensComponent } from './mviajens.component';

describe('MviajensComponent', () => {
  let component: MviajensComponent;
  let fixture: ComponentFixture<MviajensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MviajensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MviajensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
