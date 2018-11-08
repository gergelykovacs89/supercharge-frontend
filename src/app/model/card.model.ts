export class CardModel {
  id: number;
  img: string;
  backImg: string;
  flipped: boolean;

  constructor(id: number, img: string) {
    this.id = id;
    this.img = img;
    this.backImg = 'assets/cards/supercharge.png';
    this.flipped = false;
  }

  flipCard() {
    this.flipped = !this.flipped;
  }


}
