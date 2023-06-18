import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartSeiteNachAnlassComponent } from './start-seite-nach-anlass.component';

describe('StartSeiteNachAnlassComponent', () => {
  let component: StartSeiteNachAnlassComponent;
  let fixture: ComponentFixture<StartSeiteNachAnlassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartSeiteNachAnlassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartSeiteNachAnlassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
