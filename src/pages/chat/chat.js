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
import { RestapiServiceProvider } from '../../providers/restapi-service/restapi-service';
/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatPage = (function () {
    function ChatPage(navCtrl, RestapiServiceProvider) {
        this.navCtrl = navCtrl;
        this.RestapiServiceProvider = RestapiServiceProvider;
        // users: object[];
        this.searchQuery = '';
        // items: object[];
        this.items = [];
        this.getUsers();
    }
    ChatPage.prototype.getUsers = function () {
        var _this = this;
        this.RestapiServiceProvider.getUsers()
            .then(function (data) {
            // this.users = JSON.stringify(data[0]);
            _this.users = data;
            //this.items = data[0].name;
            //this.items = JSON.parse(this.users);
            _this.items = [];
            for (var i = 0; i < _this.users.length; i++) {
                _this.items.push(_this.users[i].name);
            }
        });
    };
    ChatPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        //getUsers();
        this.items = [];
        for (var i = 0; i < this.users.length; i++) {
            this.items.push(this.users[i].name);
        }
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    return ChatPage;
}());
ChatPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-chat',
        templateUrl: 'chat.html'
    }),
    __metadata("design:paramtypes", [NavController, RestapiServiceProvider])
], ChatPage);
export { ChatPage };
//# sourceMappingURL=chat.js.map