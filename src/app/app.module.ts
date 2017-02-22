/*  Created: February 21, 2017
    N64 Game Collection List
    Jesse Baril
    200226521
    This is the app module page for the to-do list */

import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyBJvuq8yPHCL1F5hZw2yFL-OIKms1Dhcts",
    authDomain: "myionicproject-f5d7b.firebaseapp.com",
    databaseURL: "https://myionicproject-f5d7b.firebaseio.com",
    storageBucket: "myionicproject-f5d7b.appspot.com",
    messagingSenderId: "689177205561"
  };
  

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
