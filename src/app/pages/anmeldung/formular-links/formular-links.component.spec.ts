import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularLinksComponent } from './formular-links.component';

describe('FormularLinksComponent', () => {
  let component: FormularLinksComponent;
  let fixture: ComponentFixture<FormularLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
