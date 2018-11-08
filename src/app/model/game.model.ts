import {CardModel} from './card.model';

export class GameModel {
  id: number;
  player: string;
  card: CardModel[];
  score: number;


  constructor(id: number, player: string, card: CardModel[]) {
    this.id = id;
    this.player = player;
    this.card = card;
    this.score = 0;
  }
}
