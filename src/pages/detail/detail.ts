import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { Observable } from 'rxjs/Observable';

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
  data: Observable<any>;
  content = 'Loading...';
  urlPrefix = 'https://www.ldoceonline.com/dictionary/';

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider) {
    this.keyword = this.navParams.data.keyword;
    this.data = this.apiProvider.getContent(this.urlPrefix + this.keyword);
    this.data.subscribe(htmlText => {
      let parser = new DOMParser();
      let parsedHtml = parser.parseFromString(htmlText, 'text/html');
      let dictionary = parsedHtml.getElementsByClassName("dictionary")[0].innerHTML;
      this.content = dictionary;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }
}
