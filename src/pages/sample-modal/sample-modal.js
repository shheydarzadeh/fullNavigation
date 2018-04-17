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
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
/**
 * Generated class for the SampleModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SampleModalPage = (function () {
    function SampleModalPage(navParams, viewCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.email = this.navParams.get('email');
    }
    SampleModalPage.prototype.closeModal = function () {
        //this.viewCtrl.dismiss(userProvidedData);
        this.viewCtrl.dismiss();
    };
    SampleModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SampleModalPage');
    };
    return SampleModalPage;
}());
SampleModalPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-sample-modal',
        templateUrl: 'sample-modal.html',
    }),
    __metadata("design:paramtypes", [NavParams, ViewController])
], SampleModalPage);
export { SampleModalPage };
//# sourceMappingURL=sample-modal.js.map