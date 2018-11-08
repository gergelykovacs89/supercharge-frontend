import { Injectable } from '@angular/core';
import {GameModel} from '../model/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  game: GameModel;

  constructor() { }
}
