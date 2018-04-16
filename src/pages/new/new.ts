import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController  } from 'ionic-angular';
import { SampleModalPage } from '../sample-modal/sample-modal';

/**
 * Generated class for the NewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new',
  templateUrl: 'new.html',
})
export class NewPage {
  userName: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    localStorage.clear();
    alert("done");
    this.openModal();
  }
  openModal() {
    let myModal = this.modalCtrl.create(SampleModalPage);

    myModal.onDidDismiss(data => {
      this.userName = data.userName;
    });

    myModal.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPage');
  }

}
