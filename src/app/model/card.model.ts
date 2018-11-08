export class CardModel {
  id: number;
  img: string;
  flipped: boolean;

  constructor(id: number, img: string) {
    this.id = id;
    this.img = img;
    this.flipped = false;
  }

  flipCard() {
    this.flipped = !this.flipped;
  }


}
