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
import { IonicPage } from 'ionic-angular';
/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatPage = (function () {
    //constructor(public navCtrl: NavController, public navParams: NavParams) {
    //}
    //ionViewDidLoad() {
    //  console.log('ionViewDidLoad ChatPage');
    //}
    function ChatPage() {
        this.searchQuery = '';
        this.initializeItems();
    }
    ChatPage.prototype.initializeItems = function () {
        this.items = [
            {
                id: 1,
                title: 'Category 1',
                items: [
                    { id: 1, title: 'item 1' },
                    { id: 2, title: 'item 2' }
                ]
            },
            {
                id: 2,
                title: 'Category 2',
                items: [
                    { id: 3, title: 'item 3' },
                    { id: 4, title: 'item 4' }
                ]
            },
            {
                id: 3,
                title: 'Category 3',
                items: [
                    { id: 5, title: 'item 5' },
                    { id: 6, title: 'item 6' }
                ]
            }
        ];
        //this.items = [
        //  'Amsterdam',
        //  'Bogota',
        //  'Boenus Aires',
        //  'Cairo',
        //  'Dhaka',
        //  'Geneva',
        //  'Genoa',
        //  'Hanoi',
        //];
    };
    return ChatPage;
}());
ChatPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-chat',
        templateUrl: 'chat.html',
    }),
    __metadata("design:paramtypes", [])
], ChatPage);
export { ChatPage };
//# sourceMappingURL=chat.js.map