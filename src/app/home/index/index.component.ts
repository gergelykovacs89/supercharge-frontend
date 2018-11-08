import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  gameForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.initForm();
  }


  initForm() {
    let numOfCards = 0;
    this.gameForm = new FormGroup({
      'numOfCards': new FormControl(numOfCards, Validators.required)
    });
  }

  onSubmit() {

  }

}
