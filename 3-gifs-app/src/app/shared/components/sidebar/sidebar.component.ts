import { GifsService } from './../../../gifs/service/gifs.service';
import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  //private GifsService
  constructor(private gifsService: GifsService){}

  get tags(): string[] {
    return this.gifsService.tagsHistory;
  }

  searchTag(tag: string): void{
    this.gifsService.searchTag(tag);
  }


}
