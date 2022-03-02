import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private dataservice : DataService) { }

  username:string = 'user'
  password:string = 'password'

  ngOnInit(): void {
    localStorage.setItem('user', this.username)
  }

  login(username:any, password:any){
    console.log(username, password)
    let formData = {'username':username, 'password': password}
    // let result =  this.dataservice.checkLogin(formData)
    // console.log("result", result)

  }

}
