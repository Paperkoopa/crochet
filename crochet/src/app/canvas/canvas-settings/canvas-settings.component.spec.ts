import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasSettingsComponent } from './canvas-settings.component';

describe('CanvasSettingsComponent', () => {
  let component: CanvasSettingsComponent;
  let fixture: ComponentFixture<CanvasSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanvasSettingsComponent]
    });
    fixture = TestBed.createComponent(CanvasSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
