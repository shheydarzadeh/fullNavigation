var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav } from 'ionic-angular';
var MenuPage = (function () {
    function MenuPage(navCtrl) {
        this.navCtrl = navCtrl;
        // Basic root for our content view
        this.rootPage = 'TabsPage';
        this.pages = [
            { title: 'دیوار', pageName: 'TabsPage', tabComponent: 'divar', index: 0, icon: 'home' },
            { title: 'دسته بندی ها', pageName: 'TabsPage', tabComponent: 'dastebandiha', index: 1, icon: 'menu' },
            { title: 'چت', pageName: 'TabsPage', tabComponent: 'chat', index: 2, icon: 'chatbubbles' },
            { title: 'آگهی جدید', pageName: 'NewPage', icon: 'add-circle' },
        ];
    }
    MenuPage.prototype.openPage = function (page) {
        var params = {};
        // The index is equal to the order of our tabs inside tabs.ts
        if (page.index) {
            params = { tabIndex: page.index };
        }
        // The active child nav is our Tabs Navigation
        if (this.nav.getActiveChildNav() && page.index != undefined) {
            this.nav.getActiveChildNav().select(page.index);
        }
        else {
            // Tabs are not active, so reset the root page 
            // In this case: moving to or from SpecialPage
            this.nav.setRoot(page.pageName, params);
        }
    };
    MenuPage.prototype.isActive = function (page) {
        // Again the Tabs Navigation
        var childNav = this.nav.getActiveChildNav();
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        // Fallback needed when there is no active childnav (tabs not active)
        if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
            return 'primary';
        }
        return;
    };
    return MenuPage;
}());
__decorate([
    ViewChild(Nav),
    __metadata("design:type", Nav)
], MenuPage.prototype, "nav", void 0);
MenuPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-menu',
        templateUrl: 'menu.html',
    }),
    __metadata("design:paramtypes", [NavController])
], MenuPage);
export { MenuPage };
//# sourceMappingURL=menu.js.map