import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId: string = 'Michele';
  password: string = '';

  auth: boolean = true;

  errMsg: string = "Sorry, the user Id and/or the password are not correct!";
  okMsg: string = "You are logged to the system now!";

  //Code injection che mi permette di accedere a tutti i metodi e proprietà dell'oggetto router.
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  gestAuth(): void {
    console.log(this.userId);
    if(this.userId === 'Michele' && this.password === "password"){
      this.auth = true;
      this.route.navigate(['welcome', this.userId]);
    }
    else {
      this.auth = false;
    }
  }

}
