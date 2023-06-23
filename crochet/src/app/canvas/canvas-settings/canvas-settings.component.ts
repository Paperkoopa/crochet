import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import canvasSettings from './canvas-settings.class';

@Component({
  selector: 'canvas-settings-component',
  templateUrl: './canvas-settings.component.html',
  styleUrls: ['./canvas-settings.component.css']
})
export class CanvasSettingsComponent {
  @Output('settingsChangedEvent') settingsChangedEvent = new EventEmitter<canvasSettings/*Record<CanvasSetting, keyof CanvasSetting>*/>();

  public settings = new canvasSettings();

  public circumference: number = 0;

  onDiameterChanged(input: string): void {
    this.circumference = Math.floor(+input * Math.PI);
  }

  onSettingChanged(setting: keyof canvasSettings, value: any): void {
    function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]) {
      obj[key] = value;
    }

    setProperty(this.settings, setting, value);
    this.settingsChangedEvent.emit(this.settings);
  }
  
  resetSettings(): void {
    this.settings = new canvasSettings();
    this.settingsChangedEvent.emit(this.settings);
  }
}
