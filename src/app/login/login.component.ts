import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  npp!: string;
  password!: string;

  constructor(private route: Router) { }

  login(){
    if(this.npp === "admin"){
      this.route.navigate(['admin/home']);

    }
    else if(this.npp === "participant"){
      this.route.navigate(['participant/home']);
    }
    else if(this.npp === "admin-risnov"){
      this.route.navigate(['admin-risnov/home']);
    }
     else if(this.npp === "admin-unit-kerja"){
      this.route.navigate(['admin-unit-kerja/home']);
    }
    else{
      alert("salah")
    }

  }


  ngOnInit(): void {
  }

}
