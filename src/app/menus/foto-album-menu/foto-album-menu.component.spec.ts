import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoAlbumMenuComponent } from './foto-album-menu.component';

describe('FotoAlbumMenuComponent', () => {
  let component: FotoAlbumMenuComponent;
  let fixture: ComponentFixture<FotoAlbumMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotoAlbumMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FotoAlbumMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
