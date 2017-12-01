import { Component, OnInit } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username:string ='';
password:string = '';
  constructor(private rout:Router) { }

    submit(username,password){
    
        if((this.username=='admine') && (this.password=='admine'))
    {
       this.rout.navigateByUrl("/shop");
    }
    else{
        alert("please enter valid username and password");
    }
}
  ngOnInit() {
  }

}
