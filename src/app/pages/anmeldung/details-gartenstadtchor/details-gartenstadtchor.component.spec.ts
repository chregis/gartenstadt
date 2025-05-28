import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsGartenstadtchorComponent } from './details-gartenstadtchor.component';

describe('DetailsGartenstadtchorComponent', () => {
  let component: DetailsGartenstadtchorComponent;
  let fixture: ComponentFixture<DetailsGartenstadtchorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsGartenstadtchorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsGartenstadtchorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
