import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private dataservice : DataService, private router : Router) { }


  ngOnInit(): void {
    localStorage.removeItem('username')
    localStorage.removeItem('password')
    
  }

  login(username:any, password:any){
    let formData = {'username':username, 'password': password}
    console.log(formData)
    localStorage.setItem('username', username)
    localStorage.setItem('password', password)
    if(this.dataservice.getToken()){
      this.router.navigate(['home']) 
    }else{
      alert("Wrong Credentials!")
    }
  }

}
