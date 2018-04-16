import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
 
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetailesPage } from '../pages/detailes/detailes';
import { SubcatPage } from '../pages/subcat/subcat';
import { SubPage } from '../pages/sub/sub';

import { RestapiServiceProvider } from '../providers/restapi-service/restapi-service';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailesPage,
    SubcatPage,
    SubPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
 
    IonicModule.forRoot(MyApp)
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailesPage,
    SubcatPage,
    SubPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestapiServiceProvider,
    AuthServiceProvider 
 
  ]
})
export class AppModule {}
