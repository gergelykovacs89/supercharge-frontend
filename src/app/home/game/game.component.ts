import { Component, OnInit } from '@angular/core';
import {GameService} from '../../service/game.service';
import {GameModel} from '../../model/game.model';
import {CardModel} from '../../model/card.model';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  public game: GameModel;
  firstClickCard: CardModel;
  secondClickCard: CardModel;
  foundPairs = 0;
  gameEnded = false;
  gameForm: FormGroup;
  bestScore = 400;
  sizes = [2, 4, 6, 8, 10, 12, 14, 15, 16, 18];
  isTimeOut = false;


  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.game = this.gameService.setupGame();
    console.log('Match found pairs: ', this.game.cards.length / 2);
  }

  checkHandStatus(): boolean {
    return this.secondClickCard.img === this.firstClickCard.img;
  }

  checkGameStatus() {
    if (this.foundPairs === this.game.cards.length / 2) {
      this.bestScore = this.bestScore < this.game.score ? this.bestScore : this.game.score;
      this.gameEnded = true;
    }
  }


  onClick(card: CardModel) {
    this.game.score++;
    console.log(this.game.score);
    if (this.game.score % 2 !== 0) {
      this.firstClickCard = card;
      this.firstClickCard.flipCard();
    } else if (this.game.score % 2 === 0) {
      this.secondClickCard = card;
      this.secondClickCard.flipCard();
      const isFound = this.checkHandStatus();
      if (!isFound) {
        this.isTimeOut = true;
        setTimeout(() => this.isTimeOut = false, 1000);
        setTimeout(() => this.firstClickCard.flipCard(), 1000);
        setTimeout(() => this.secondClickCard.flipCard(), 1000);
      } else {
        this.secondClickCard.found = true;
        this.firstClickCard.found = true;
        this.foundPairs++;
        this.checkGameStatus();
      }
    }
  }

  onRestart() {
    this.gameService.restart();
    this.game = this.gameService.setupGame();
    this.gameEnded = false;
    this.foundPairs = 0;
  }
}
