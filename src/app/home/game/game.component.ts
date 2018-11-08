import { Component, OnInit } from '@angular/core';
import {GameService} from '../../service/game.service';
import {GameModel} from '../../model/game.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  public game: GameModel;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.game = this.gameService.setupGame();
  }

}
