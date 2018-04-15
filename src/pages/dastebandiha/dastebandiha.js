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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SubcatPage } from '../subcat/subcat';
/**
 * Generated class for the DastebandihaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DastebandihaPage = (function () {
    //constructor(public navCtrl: NavController, public navParams: NavParams) {
    //}
    function DastebandihaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
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
    DastebandihaPage.prototype.initializeItems = function () {
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
            { "title": "A", "id": 1, "parent_id": 0, icon_name: 'star', },
            { "title": "B", "id": 2, "parent_id": 0, icon_name: 'car', },
            { "title": "A1", "id": 3, "parent_id": 1 },
            { "title": "A2", "id": 4, "parent_id": 1 },
            { "title": "B1", "id": 5, "parent_id": 2 },
            { "title": "B2", "id": 6, "parent_id": 2 },
        ];
    };
    DastebandihaPage.prototype.nextpage = function (it) {
        alert('Clicked: ');
        this.navCtrl.push(SubcatPage, it);
    };
    return DastebandihaPage;
}());
DastebandihaPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-dastebandiha',
        templateUrl: 'dastebandiha.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams])
], DastebandihaPage);
export { DastebandihaPage };
//# sourceMappingURL=dastebandiha.js.map