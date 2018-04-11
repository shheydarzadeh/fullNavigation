import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DastebandihaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dastebandiha',
  templateUrl: 'dastebandiha.html',
})
export class DastebandihaPage {
  items: object[];

  //constructor(public navCtrl: NavController, public navParams: NavParams) {
  //}
  constructor(private navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }
  initializeItems() {
    this.items = [
      {
        id: 1,
        icon_name: 'star',
        title: 'املاک',
        items: [
          { id: 1, title: 'خرید املاک' },
          { id: 2, title: 'فروش املاک' }
        ]
      },
      {
        id: 2,
        icon_name: 'car',
        title: 'وسایل نقلیه',
        items: [
          { id: 3, title: 'خرید وسایل نقلیه' },
          { id: 4, title: 'فروش وسایل نقلیه' }
        ]
      },
      {
        id: 3,
        title: 'وسایل شخصی',
        icon_name: 'watch',
        items: [
          { id: 5, title: 'خرید وسایل شخصی' },
          { id: 6, title: 'فروش وسایل شخصی' }
        ]
      }
    ];
  }
  nextpage()
  {
    alert('Clicked: ');
  }
  //ionViewDidLoad() {
  //  console.log('ionViewDidLoad DastebandihaPage');
  //}

}
