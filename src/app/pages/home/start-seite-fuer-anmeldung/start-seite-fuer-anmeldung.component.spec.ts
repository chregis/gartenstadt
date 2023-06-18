import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartSeiteFuerAnmeldungComponent } from './start-seite-fuer-anmeldung.component';

describe('StartSeiteFuerAnmeldungComponent', () => {
  let component: StartSeiteFuerAnmeldungComponent;
  let fixture: ComponentFixture<StartSeiteFuerAnmeldungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartSeiteFuerAnmeldungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartSeiteFuerAnmeldungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
