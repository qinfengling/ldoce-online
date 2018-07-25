import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  keyword = '';

  constructor(public navCtrl: NavController) {

  }

  lookup() {
    alert(this.keyword);
    this.keyword = '';
  }
}
