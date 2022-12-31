import { Component, Input } from '@angular/core';
import dataData from './data.json';
import { Router } from '@angular/router';

interface Data {
  id:Number;
  name:String;
  email:String;
  gender:String;
}

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})

export class DataComponent {
  name='Angular';
  
  constructor(private router: Router){ }
  
  data: Data[] = dataData;
  @Input() public isUserLoggedIn!: boolean;

  onLoginClick(){
    this.router.navigate(["./login-form"]);
  }
}