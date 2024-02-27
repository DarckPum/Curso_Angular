import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class GifsService {

  private _tagsHistory: string[] = [];
  private apiKey: string = 'bF5YleG9Voe7yuXrFcGcGOMk69LYn2Kl';

  constructor() { }

  get tagsHistory(){
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string){
    tag = tag.toLowerCase(); //pase a mayusculas

    if( this._tagsHistory.includes( tag )){
      this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag) //Si ya fue ingresado lo eliminamos.
    }

    this._tagsHistory.unshift( tag );
    this._tagsHistory = this._tagsHistory.splice(0,10);
  }

  async searchTag( tag: string): Promise<void>{
    if( tag.length === 0 ) return;

    this.organizeHistory(tag);

    fetch('https://api.giphy.com/v1/gifs/search?api_key=bF5YleG9Voe7yuXrFcGcGOMk69LYn2Kl&q=Resident evil&limit=20')
    .then( resp => resp.json() )
    .then( data => console.log(data));
  }

}
