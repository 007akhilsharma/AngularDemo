import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveSnackBarComponent } from './save-snack-bar.component';

describe('SaveSnackBarComponent', () => {
  let component: SaveSnackBarComponent;
  let fixture: ComponentFixture<SaveSnackBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaveSnackBarComponent]
    });
    fixture = TestBed.createComponent(SaveSnackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
