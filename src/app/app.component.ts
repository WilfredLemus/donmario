import { Component } from '@angular/core';
import { timeout } from 'rxjs/operator/timeout';
import { AngularFire } from 'angularfire2';
// import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLogin: boolean;
  isLogged:boolean = false;
  user = {};
  isAuth = false;
  // constructor(public af: AngularFire) {
  //     // *ngIf="(af.auth | async)"
  //     this.isLogin = af.auth.closed;
  //     console.log((af.auth));
  // }

  constructor(
    public af: AngularFire
  ) {
    this.af.auth.subscribe(user => {
      console.log(user);
      if(user) {
        // user logged in
        this.user = user;
        this.isLogged = true;
        this.isAuth = true;
      }
      else {
        // user not logged in
        this.user = {};
        this.isLogged = false;
        this.isAuth = false;
      }
    });
    console.log(this.user);
  }
}
