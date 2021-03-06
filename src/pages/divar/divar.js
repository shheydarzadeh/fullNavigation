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
import { IonicPage, NavController } from 'ionic-angular';
import { DetailesPage } from '../detailes/detailes';
/**
 * Generated class for the DivarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DivarPage = (function () {
    //constructor(public navCtrl: NavController, public navParams: NavParams) {
    //}
    //ionViewDidLoad() {
    //  console.log('ionViewDidLoad DivarPage');
    //}
    function DivarPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.initializeItems();
    }
    DivarPage.prototype.initializeItems = function () {
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
                photo: 'img/thumbnail-totoro.png'
            },
        ];
    };
    DivarPage.prototype.doLogin = function (it) {
        alert('Clicked: ' + it.id);
        this.navCtrl.push(DetailesPage, it);
        // this.navCtrl.push(DetailesPage);
        // this.navCtrl.push(DastebandihaPage, it);
    };
    return DivarPage;
}());
DivarPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-divar',
        templateUrl: 'divar.html',
    }),
    __metadata("design:paramtypes", [NavController])
], DivarPage);
export { DivarPage };
//# sourceMappingURL=divar.js.map