import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crochet';

  @ViewChild('diaInput') diaInput!: ElementRef;

  public circumference!: number;

  onDiameterChanged(input: string): void {
    this.circumference = Math.floor(+input * Math.PI);
  }
}