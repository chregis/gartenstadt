import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnmeldenMenuComponent } from './anmelden-menu.component';

describe('AnmeldenMenuComponent', () => {
  let component: AnmeldenMenuComponent;
  let fixture: ComponentFixture<AnmeldenMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnmeldenMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnmeldenMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
