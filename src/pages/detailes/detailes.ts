import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailes',
  templateUrl: 'detailes.html',
})
export class DetailesPage {
  user: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.user = navParams.data;
    //console.log(navParams.data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailesPage');
  }

}
