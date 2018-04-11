import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
 import 'rxjs/add/operator/map';
/*
  Generated class for the RestapiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestapiServiceProvider {
  data: Object;




  // data: Promise<any>;

  //apiUrl = 'https://jsonplaceholder.typicode.com';
  constructor(public http: HttpClient) {
   console.log('Hello RestapiServiceProvider Provider');
  }
  getUsers() {
    //if (this.data) {
    //  return Promise.resolve(this.data);
    //}

    return new Promise(resolve => {
      this.http.get('https://jsonplaceholder.typicode.com/users')
        .subscribe(data => {
        this.data = data;
          resolve(this.data);
      });
     
    });
   
  }




  //data: Promise<any>;
  
  //apiUrl = 'https://jsonplaceholder.typicode.com';
  //constructor(public http: HttpClient) {
  //  console.log('Hello RestapiServiceProvider Provider');
  //}
  //getUsers() {
  //  if (this.data) {
  //    return Promise.resolve(this.data);
  //  }

  //  return new Promise(resolve => {
  //    this.http.get(this.apiUrl + '/users')
  //      .map((res: Response) => res.json())
  //      .subscribe(data => {
  //        this.data = data;
  //        resolve(this.data);
  //      });
  //  });
  //}
}

//Rx.Observable
//  .ajax({ url: 'https://jsonplaceholder.typicode.com/posts', method: 'GET', responseType: 'json' })
//  .subscribe(function (data) { return data.response; });
