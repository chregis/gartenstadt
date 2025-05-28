import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsKinderchorComponent } from './details-kinderchor.component';

describe('DetailsKinderchorComponent', () => {
  let component: DetailsKinderchorComponent;
  let fixture: ComponentFixture<DetailsKinderchorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsKinderchorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsKinderchorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
