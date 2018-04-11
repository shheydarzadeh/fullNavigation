import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailesPage } from '../detailes/detailes';
import { DastebandihaPage } from '../dastebandiha/dastebandiha';


/**
 * Generated class for the DivarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-divar',
  templateUrl: 'divar.html',
})
export class DivarPage {
  items: object[];
  //constructor(public navCtrl: NavController, public navParams: NavParams) {
  //}

  //ionViewDidLoad() {
  //  console.log('ionViewDidLoad DivarPage');
  //}
  constructor(private navCtrl: NavController) {
    this.initializeItems();
  }
  initializeItems() {
    this.items = [
      {
        id: 1,
        title: 'لیر',
        price: '1.290 تومان',
        photo: 'img/thumbnail-totoro.png'
      },
      {
        id: 2,
        title: 'برج باغ الهیه',
        price: 'قیمت کل:توافقی',
        photo:'img/thumbnail-totoro.png'
      },
      
    ];

  }
  doLogin(it) {
    alert('Clicked: ' + it.id);
    this.navCtrl.push(DetailesPage, it);
   // this.navCtrl.push(DetailesPage);
   // this.navCtrl.push(DastebandihaPage, it);
  }
}
