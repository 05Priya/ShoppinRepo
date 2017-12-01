 import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ShopComponent } from './shop/shop.component';
import { routes } from './router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
        routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
