import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public angularFire: AngularFire,private router: Router) { }

  ngOnInit() {
  }

  logout() {
     this.angularFire.auth.logout();
     console.log('logged out');
     this.router.navigateByUrl('/login');
  }

}
