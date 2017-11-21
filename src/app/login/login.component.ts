import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
// import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
// import { moveIn } from '../router.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // animations: [moveIn()],
  // host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {

  error: any;
  constructor(public afa: AngularFireAuth, private router: Router) {
    this.afa.auth.onAuthStateChanged(auth => {     // subscribe method was not found
      if (auth) {
        this.router.navigateByUrl('/members');
      }
    });
  }

  // loginFb() {
  //   this.afa.auth.login({
  //     provider: AuthProviders.Facebook,
  //     method: AuthMethods.Popup,
  //   })  // login method was not found
  //   .then(
  //     (success) => {
  //       this.router.navigate(['/members']);
  //     }).catch(
  //       (err) => {
  //         this.error = err;
  //       });
  // }

  ngOnInit() {
  }

}
