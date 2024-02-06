import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe-game',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {
  public gamename: string[] = ['Spiderman','Marvel Ultimate Aliance','Avengers','Capcom vs Marvel 2'];
public deletedgame?: string;

  removeLastGame(): void{
    this.deletedgame = this.gamename.pop();
  }

}
