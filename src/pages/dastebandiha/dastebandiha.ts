import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SubcatPage } from '../subcat/subcat';
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
  //items: object[];
  items: Array<any>;
  //constructor(public navCtrl: NavController, public navParams: NavParams) {
  //}
  constructor(private navCtrl: NavController, public navParams: NavParams) {
    //if (localStorage.getItem('token') == "ttttttoken")
    //{
    //  alert("ok");
    //  //this.nav.setRoot('MenuPage');
    //}
    //else {
    //  alert("nok");
    //}
    this.initializeItems();
  }
  initializeItems() {
   
    //this.items = [
    //  {
    //    id: 1,
    //    icon_name: 'star',
    //    title: 'املاک',
    //    items: [
    //      { id: 1, title: 'خرید املاک', items: [{ id: 1, title: 'خرید آپارتمان' }, { id: 2, title: 'خرید ویلا' }] },
    //      { id: 2, title: 'فروش املاک', items: [{ id: 1, title: 'فروش آپارتمان' }, { id: 2, title: 'فروش ویلا' }] }
    //    ]
    //  },
    //  {
    //    id: 2,
    //    icon_name: 'car',
    //    title: 'وسایل نقلیه',
    //    items: [
    //      { id: 3, title: 'خرید وسایل نقلیه' },
    //      { id: 4, title: 'فروش وسایل نقلیه' }
    //    ]
    //  },
    //  {
    //    id: 3,
    //    title: 'وسایل شخصی',
    //    icon_name: 'watch',
    //    items: [
    //      { id: 5, title: 'خرید وسایل شخصی' },
    //      { id: 6, title: 'فروش وسایل شخصی' }
    //    ]
    //  }
    //];
    this.items = [
      { "title": "A", "id": 1, "parent_id": 0, icon_name: 'star',},
      { "title": "B", "id": 2, "parent_id": 0, icon_name: 'car',},
      { "title": "A1", "id": 3, "parent_id": 1 },
      { "title": "A2", "id": 4, "parent_id": 1 },
      { "title": "B1", "id": 5, "parent_id": 2 },
      { "title": "B2", "id": 6, "parent_id": 2 },];

  }
  nextpage(it)
  {
    alert('Clicked: ');
    this.navCtrl.push(SubcatPage, it);
  }
  
  //ionViewDidLoad() {
  //  console.log('ionViewDidLoad DastebandihaPage');
  //}

}
