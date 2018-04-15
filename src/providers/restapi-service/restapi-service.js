var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the RestapiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestapiServiceProvider = (function () {
    // data: Promise<any>;
    //apiUrl = 'https://jsonplaceholder.typicode.com';
    function RestapiServiceProvider(http) {
        this.http = http;
        console.log('Hello RestapiServiceProvider Provider');
    }
    RestapiServiceProvider.prototype.getUsers = function () {
        //if (this.data) {
        //  return Promise.resolve(this.data);
        //}
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('https://jsonplaceholder.typicode.com/users')
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    return RestapiServiceProvider;
}());
RestapiServiceProvider = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient])
], RestapiServiceProvider);
export { RestapiServiceProvider };
//Rx.Observable
//  .ajax({ url: 'https://jsonplaceholder.typicode.com/posts', method: 'GET', responseType: 'json' })
//  .subscribe(function (data) { return data.response; });
//# sourceMappingURL=restapi-service.js.map