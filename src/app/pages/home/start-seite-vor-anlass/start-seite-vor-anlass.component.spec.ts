import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartSeiteVorAnlassComponent } from './start-seite-vor-anlass.component';

describe('ProgrammComponent', () => {
  let component: StartSeiteVorAnlassComponent;
  let fixture: ComponentFixture<StartSeiteVorAnlassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartSeiteVorAnlassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartSeiteVorAnlassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
