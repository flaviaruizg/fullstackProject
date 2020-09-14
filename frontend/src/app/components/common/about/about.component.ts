import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../../services/games.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 
  
  games : any = [];
  constructor(private service : GamesService) { }

  async ngOnInit() {
    await this.gamesAll();
  }
  async gamesAll(){
    const result : any = await this.service.gamesAll();
    this.games = result.games;
  }
}
  

  
