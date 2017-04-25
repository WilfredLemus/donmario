import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
import { ProductoComponent } from './producto/producto.component';
import { PedidoComponent } from './pedido/pedido.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './service/auth.service';
// import { OtherComponent } from './other/other.component';
// import { SignupComponent } from './signup/signup.component';
// import { EmailComponent } from './email/email.component';
// import { MembersComponent } from './members/members.component';

export const router: Routes = [
    { path: '', redirectTo: 'pedidos', pathMatch: 'full' },
    // { path: '', redirectTo: 'productos', pathMatch: 'full', canActivate: [AuthGuardService] },
    { path: 'pedidos', component: PedidoComponent, canActivate: [AuthGuardService], children: [
        // { path: '', redirectTo: 'pedidos' },
        // { path: 'producto', component: ProductoComponent},
        // { path: 'pedidos', component: PedidoComponent },
    ]},
    { path: 'productos', component: ProductoComponent, canActivate: [AuthGuardService], children: [
        // { path: '', redirectTo: 'pedidos' },
        // { path: 'producto', component: ProductoComponent},
        // { path: 'pedidos', component: PedidoComponent },
    ]},
    // { path: 'pedidos', component: PedidoComponent },
    // { path: '', component: HomeComponent, canActivate: [AuthGuardService]},
    // { path: 'productos', component: ProductoComponent, canActivate: [AuthGuardService]},
    { path: 'login', component: LoginComponent},
    // { path: 'signup', component: SignupComponent },
    // { path: 'login-email', component: EmailComponent },
    // { path: 'members', component: MembersComponent, canActivate: [AuthGuard] }

];

//  export const routes: Route[] = [
//     { path: '', redirectTo: "login", pathMatch: "full" }, 
//     { path: 'login', component: LoginComponent }, 
//     { path: 'csvtemplate', component: TemplateComponent, canActivate: ['canActivateForLoggedIn'],
//         children: [{
//             path: '',
//             redirectTo: 'dashboard'
//         }, 
//         {
//             path:'dashboard',
//             component: DashboardComponent
//         },
//         {
//             path: 'csvtimeline',
//             component: CsvTimelineComponent
//         }, {
//             path: 'addcategory',
//             component: CsvAddCategoryComponent
//         }
//         ]
//     }];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);