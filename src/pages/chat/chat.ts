import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestapiServiceProvider } from '../../providers/restapi-service/restapi-service';
/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',  
  templateUrl: 'chat.html'
  
})
export class ChatPage {
  
  users: any;
 // users: object[];
  searchQuery: string = '';
 // items: object[];
  items: string[] = [];
  constructor(public navCtrl: NavController, public RestapiServiceProvider: RestapiServiceProvider) {
    this.getUsers();
  }
  getUsers() {
    this.RestapiServiceProvider.getUsers()
      .then(data => {
       // this.users = JSON.stringify(data[0]);
        this.users = data;
        //this.items = data[0].name;
        //this.items = JSON.parse(this.users);
        this.items = [];
        for (var i = 0; i < this.users.length; i++) {

          this.items.push(this.users[i].name);
        }
      });
    
  }
  getItems(ev: any) {
    // Reset items back to all of the items
    //getUsers();
    this.items = [];
    for (var i = 0; i < this.users.length; i++) {

      this.items.push(this.users[i].name);
    }
    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  
  }
  //constructor(public navCtrl: NavController, public navParams: NavParams) {
  //}

  //ionViewDidLoad() {
  //  console.log('ionViewDidLoad ChatPage');
  //}
  //constructor() {
  //  this.initializeItems();
  //}
  //initializeItems() {
  //  this.items = [
  //    {
  //      id: 1,
  //      title: 'Category 1',
  //      items: [
  //        { id: 1, title: 'item 1' },
  //        { id: 2, title: 'item 2' }
  //      ]
  //    },
  //    {
  //      id: 2,
  //      title: 'Category 2',
  //      items: [
  //        { id: 3, title: 'item 3' },
  //        { id: 4, title: 'item 4' }
  //      ]
  //    },
  //    {
  //      id: 3,
  //      title: 'Category 3',
  //      items: [
  //        { id: 5, title: 'item 5' },
  //        { id: 6, title: 'item 6' }
  //      ]
  //    }
  //  ];
  //  //this.items = [
  //  //  'Amsterdam',
  //  //  'Bogota',
  //  //  'Boenus Aires',
  //  //  'Cairo',
  //  //  'Dhaka',
  //  //  'Geneva',
  //  //  'Genoa',
  //  //  'Hanoi',
  //  //];
  //}
  //getItems(ev: any) {
  //  // Reset items back to all of the items
  //  this.initializeItems();

  //  // set val to the value of the searchbar
  //  let val = ev.target.value;

  //  // if the value is an empty string don't filter the items
  //  if (val && val.trim() != '') {
  //    this.items = this.items.filter((item) => {
  //      return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
  //    })
  //  }
  //}
}
