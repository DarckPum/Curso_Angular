import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  /*public title: string = 'Hola mundo.';
  public counter: number = 10;

  public incrementar(value:number): void {
    this.counter += 1;
  }
  public disminuir(value:number): void {
    this.counter -=1;
  }
  public reset(): void {
    this.counter = 10;
  }*/
}
