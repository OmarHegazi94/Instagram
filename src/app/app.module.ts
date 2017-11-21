import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import 'hammerjs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdMenuModule } from '@angular/material';
import { MdToolbarModule, MdButtonModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdTabsModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdSliderModule } from '@angular/material';
import { MdSlideToggleModule } from '@angular/material';

import { AngularFireModule } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
// import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
// import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyDVCC4zSexg4rtjfoDZ8zG9YHdv2l72YDY',
  authDomain: 'instagram-88.firebaseapp.com',
  databaseURL: 'https://instagram-88.firebaseio.com',
  projectId: 'instagram-88',
  storageBucket: '',
  messagingSenderId: '55648984415'
};

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    // Observable,
    // AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable,
    AngularFireAuthModule,
    // AngularFireAuth,
    // AngularFireAuthModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdMenuModule,
    MdTabsModule,
    MdCardModule,
    MdSliderModule,
    MdSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
