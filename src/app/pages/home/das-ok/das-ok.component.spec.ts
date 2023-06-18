import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasOkComponent } from './das-ok.component';

describe('DasOkComponent', () => {
  let component: DasOkComponent;
  let fixture: ComponentFixture<DasOkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasOkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DasOkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
