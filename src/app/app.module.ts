import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';

import { AuthGuardService } from './service/auth.service';
import { routes } from './app.routes';
import { ProductoComponent } from './producto/producto.component';
import { PedidoComponent } from './pedido/pedido.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCV12v3qGnuFpz7a1kWfavUsilf6wCWBcQ",
  authDomain: "donmario-713c2.firebaseapp.com",
  databaseURL: "https://donmario-713c2.firebaseio.com",
  projectId: "donmario-713c2",
  storageBucket: "donmario-713c2.appspot.com",
  messagingSenderId: "434214118176"
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    ProductoComponent,
    PedidoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
