import { Component, OnInit } from '@angular/core';
import {GameService} from '../../service/game.service';
import {GameModel} from '../../model/game.model';
import {CardModel} from '../../model/card.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  public game: GameModel;
  firstClickCard: CardModel;
  secondClickCard: CardModel;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.game = this.gameService.setupGame();
  }

  checkGameStatus(): boolean {
    if (this.secondClickCard.img === this.firstClickCard.img) {
      this.secondClickCard.found = true;
      this.firstClickCard.found = true;
      return true;
    } else {
      return false;
    }
  }


  onClick(card: CardModel) {
    this.game.score++;
    console.log(this.game.score);
    if (this.game.score % 2 !== 0) {
      this.firstClickCard = card;
      console.log(card.img + ' first card');
      this.firstClickCard.flipCard();
    } else if (this.game.score % 2 === 0) {
      this.secondClickCard = card;
      console.log(card.img + ' second card');
      this.secondClickCard.flipCard();
      const isFound = this.checkGameStatus();
      console.log(isFound);
      if (!isFound) {
        setTimeout(() => this.firstClickCard.flipCard(), 1000);
        setTimeout(() => this.secondClickCard.flipCard(), 1000);
      }
    }
  }

}
