import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //constructor(public navCtrl: NavController) {

  //}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.navCtrl.setRoot('MenuPage');
  }

}
