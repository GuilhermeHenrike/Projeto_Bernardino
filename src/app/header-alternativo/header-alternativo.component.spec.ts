import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAlternativoComponent } from './header-alternativo.component';

describe('HeaderAlternativoComponent', () => {
  let component: HeaderAlternativoComponent;
  let fixture: ComponentFixture<HeaderAlternativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderAlternativoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderAlternativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
