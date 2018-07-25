import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  keyword: String;
  data: Promise<any>;
  content = 'Loading...';
  urlPrefix = 'https://www.ldoceonline.com/dictionary/';

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider) {
    this.keyword = this.navParams.data.keyword;
    this.data = this.apiProvider.getContent(this.urlPrefix + this.keyword);
    this.data.then(htmlText => {
      let parser = new DOMParser();
      let parsedHtml = parser.parseFromString(htmlText.data, 'text/html');
      let dictionary = parsedHtml.getElementsByClassName("dictionary")[0].innerHTML;
      this.content = dictionary;
    })
    .catch(error => {
      this.content = error.error;
      console.log(error);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }
}
