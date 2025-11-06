import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltcancComponent } from './altcanc.component';

describe('AltcancComponent', () => {
  let component: AltcancComponent;
  let fixture: ComponentFixture<AltcancComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltcancComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltcancComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
