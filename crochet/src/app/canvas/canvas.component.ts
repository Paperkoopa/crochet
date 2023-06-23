import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import canvasSettings from './canvas-settings/canvas-settings.class';

@Component({
  selector: 'canvas-component',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements AfterViewInit {
  @ViewChild('canvas') canvas!: ElementRef;
  @ViewChild('settingsComponent') settingsComponent!: ElementRef;

  public ctx!: CanvasRenderingContext2D;
  // private settings: Record<string, any> = new canvasSettings(); //Do I need this?
  private settings = new canvasSettings();

  squareSize = 30;

  ngAfterViewInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.initializeCanvas(500, 500, this.settings.backgroundColor);
  };

  initializeCanvas(width: number, height: number, backgroundColor: string): void {
    this.ctx.canvas.width = width;
    this.ctx.canvas.height = height;
    this.ctx.fillStyle = backgroundColor;
    this.ctx.fillRect(0, 0, width, height);
    this.ctx.strokeStyle = "Black";
    this.ctx.strokeRect(0, 0, width, height);
  };

  drawGrid(size: number, color: string): void {
    this.ctx.strokeStyle = color;
  }

  applySettings(settings: canvasSettings/*Record<CanvasSettings, keyof CanvasSettings>*/) {
    this.settings = settings; //Do I need this?

    const newWidth = settings.maxWidth * settings.squareSize;
    const newHeight = settings.maxRows * settings.squareSize;

    this.initializeCanvas(newWidth, newHeight, settings.backgroundColor);
    this.drawGrid(settings.squareSize, settings.gridColor);
    console.log(this.settings); //DEBUG
  };
};
