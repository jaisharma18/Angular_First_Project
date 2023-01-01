import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  constructor(private router: Router){ }

  public onLoginClick(item:any){
    if(item.uname!="" && item.password!="" && item.uname!=null && item.password!= null)
      this.router.navigate(["./navigator"]);
  }
}
