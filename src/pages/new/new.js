var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { SampleModalPage } from '../sample-modal/sample-modal';
/**
 * Generated class for the NewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewPage = (function () {
    function NewPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        localStorage.clear();
        alert("done");
        this.openModal();
    }
    NewPage.prototype.openModal = function () {
        var myModal = this.modalCtrl.create(SampleModalPage);
        //myModal.onDidDismiss(data => {
        //  this.userName = data.userName;
        //});
        myModal.present();
    };
    NewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewPage');
    };
    return NewPage;
}());
NewPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-new',
        templateUrl: 'new.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, ModalController])
], NewPage);
export { NewPage };
//# sourceMappingURL=new.js.map