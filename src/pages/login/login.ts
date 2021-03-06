import { Component } from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  //constructor(public navCtrl: NavController, public navParams: NavParams) {
  //}
  //doLogin() {
  //  this.navCtrl.setRoot('MenuPage');
  //}
  //ionViewDidLoad() {
  //  console.log('ionViewDidLoad LoginPage');
  //}

  loading: Loading;
  registerCredentials = { email: '', password: '' };

  constructor(private nav: NavController, private auth: AuthServiceProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
    if (localStorage.getItem('token') == "ttttttoken")
    {

      alert(localStorage.getItem('token'));
      alert("ok");
      this.nav.setRoot('MenuPage');
    }
    else {
      alert(localStorage.getItem('token'));

      alert("nok");
    }

  }

  public createAccount() {
    this.nav.push('RegisterPage');

  }

  public login() {
    //this.nav.setRoot('MenuPage');
    

      this.showLoading()
      this.auth.login(this.registerCredentials).subscribe(allowed => {
        if (allowed) {
          //this.nav.setRoot('HomePage');
          this.nav.setRoot('MenuPage');
        } else {
          this.showError("Access Denied");
        }
      },
        error => {
          this.showError(error);
        });
  }
   
  

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}
