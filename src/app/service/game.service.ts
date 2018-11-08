import { Injectable } from '@angular/core';
import {GameModel} from '../model/game.model';

const imgPathArray = [
  'assets/cards/angular.png',
  'assets/cards/d3.png',
  'assets/cards/jenkins.png',
  'assets/cards/postcss.png',
  'assets/cards/react.png',
  'assets/cards/redux.png',
  'assets/cards/sass.png',
  'assets/cards/ts.png',
  'assets/cards/webpack.png'
];


@Injectable({
  providedIn: 'root'
})


export class GameService {
  game: GameModel = new GameModel(1, 'player1', []);

  constructor() {
  }

  setupGame(): GameModel {
    this.game.addCards(18, imgPathArray);
    return this.game;
  }


}
