import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MossaHistoriaComponent } from './mossa-historia.component';

describe('MossaHistoriaComponent', () => {
  let component: MossaHistoriaComponent;
  let fixture: ComponentFixture<MossaHistoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MossaHistoriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MossaHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
