import {CardModel} from './card.model';

export class GameModel {
  id: number;
  player: string;
  cards: CardModel[];
  score: number;


  constructor(id: number, player: string, cards: CardModel[]) {
    this.id = id;
    this.player = player;
    this.cards = cards;
    this.score = 0;
  }

  addCards(numofCards: number, imgArray: string[]) {
    for (let _i = 0; _i < numofCards / 2; _i++) {
      this.cards.push(new CardModel(_i, imgArray[_i]));
      this.cards.push(new CardModel(_i + 1, imgArray[_i]));
    }
  }
}
