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
    this.initializeCanvas(500, 500);
  };

  initializeCanvas(width: number, height: number): void {
    this.ctx.canvas.width = width;
    this.ctx.canvas.height = height;
    this.ctx.fillStyle = this.settings.backgroundColor;
    this.ctx.fillRect(0, 0, width, height);
    this.ctx.strokeStyle = this.settings.borderColor;
    this.ctx.strokeRect(0, 0, width, height);

    this.drawGrid(this.settings.squareSize, this.settings.gridColor);

    this.drawAxis(this.settings.axisColor);
  };

  drawGrid(size: number, color: string): void {
    this.ctx.strokeStyle = color;
    // for(let i; i++; i>size)
    this.ctx.strokeRect(size, size, size, size);
  }

  drawAxis(color: string): void {
    this.ctx.strokeStyle = color;
    this.ctx.beginPath();
    const x = Math.round(this.ctx.canvas.width / 2)
    this.ctx.moveTo(x, 1);
    this.ctx.lineTo(x, this.ctx.canvas.height-1);
    this.ctx.stroke();
  }

  applySettings(settings: canvasSettings/*Record<CanvasSettings, keyof CanvasSettings>*/) {
    this.settings = settings; //Do I need this?

    const newWidth = settings.maxWidth * settings.squareSize;
    const newHeight = settings.maxRows * settings.squareSize;

    this.initializeCanvas(newWidth, newHeight);
    this.drawGrid(settings.squareSize, settings.gridColor);
    console.log(this.settings); //DEBUG
  };
};
