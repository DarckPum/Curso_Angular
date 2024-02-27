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
  get tags(){
    return this.gifsService.tagsHistory;
  }

}
