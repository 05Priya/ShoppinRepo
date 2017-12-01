import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {ShopComponent} from './shop/shop.component';

export const router:Routes=[
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'shop',component:ShopComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);