import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  state: string = '';
  error: any;

  constructor(public angularFire: AngularFire, private router: Router) {
    this.angularFire.auth.subscribe(auth => { 
      if(auth) {
        this.router.navigateByUrl('/');
      }
    });
   }

  ngOnInit() {
  }

  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.angularFire.auth.login({
        email: formData.value.email,
        password: formData.value.password
      },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      }).then(
        (success) => {
        console.log(success);
        this.router.navigate(['/']);
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      })
    }
  }

}
