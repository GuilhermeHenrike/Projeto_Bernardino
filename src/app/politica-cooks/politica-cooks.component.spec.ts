import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticaCooksComponent } from './politica-cooks.component';

describe('PoliticaCooksComponent', () => {
  let component: PoliticaCooksComponent;
  let fixture: ComponentFixture<PoliticaCooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoliticaCooksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliticaCooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
