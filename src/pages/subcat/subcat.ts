import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SubPage } from '../sub/sub';
/**
 * Generated class for the SubcatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subcat',
  templateUrl: 'subcat.html',
})
export class SubcatPage {
  user: any;
  items: string[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.data;
    this.items = [];
    for (var i = 0; i < this.user.length; i++) {

      this.items.push(this.user[i].id);
    }
  }

  nextpage(it) {
    alert('Clicked: ');
    this.navCtrl.push(SubPage, it);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SubcatPage');
  }

}
