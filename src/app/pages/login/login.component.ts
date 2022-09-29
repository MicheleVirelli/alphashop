import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthappService } from 'src/services/authapp.service';

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

  title: string = "Access and Authentication";
  subtitle: string = "Use user id and password";


  //Code injection che mi permette di accedere a tutti i metodi e proprietà dell'oggetto router.
  constructor(private route: Router, private BasicAuth: AuthappService) { }

  ngOnInit(): void {
  }

  gestAuth(): void {
    console.log(this.userId);


    if(this.BasicAuth.auth(this.userId, this.password)){
      this.route.navigate(['welcome', this.userId]);
      this.auth = true;
    }
    else {
      this.auth = false;
    }
  }

}
