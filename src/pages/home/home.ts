import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  keyword = '';

  constructor(public navCtrl: NavController) {}

  lookup() {
    if (this.keyword) {
      this.navCtrl.push(DetailPage, { keyword: this.keyword });
    }
  }
}
