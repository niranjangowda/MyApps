import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {MenuPage} from "../pages/menu/menu";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {IonicStorageModule} from "@ionic/storage";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage
  ],
  imports: [
    BrowserModule,
    //FormsModule,
    //IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage
    //FormData
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
