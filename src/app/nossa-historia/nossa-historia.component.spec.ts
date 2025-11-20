import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NossaHistoriaComponent } from './nossa-historia.component';

describe('ossaHistoriaComponent', () => {
  let component: NossaHistoriaComponent;
  let fixture: ComponentFixture<NossaHistoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NossaHistoriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NossaHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
