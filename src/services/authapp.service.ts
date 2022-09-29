import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthappService {

  constructor() { }

  auth = (userid: string, password: string): boolean => {
    var retval = (userid === 'Michele' && password === 'password') ? true : false;
    if(retval)
      sessionStorage.setItem("User",userid);

    return retval;
  }

  loggedUser = (): string | null => (sessionStorage.getItem("User")) ? sessionStorage.getItem("User") : "";

  isLogged = (): boolean => (sessionStorage.getItem("User")) ? true : false;

  clearUser = (): void => sessionStorage.removeItem("User");

  clearAll = (): void => sessionStorage.clear();

}
