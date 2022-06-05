import { LoginModel } from './../model/login.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import {HttpClient, JsonpClientBackend} from "@angular/common/http";
import { Router } from '@angular/router';

const LOGIN_KEY = 'login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //Observable y observador
  private loginModelBehaviourSubject: BehaviorSubject<LoginModel | null>;
  public login: Observable<LoginModel | null>//Comprobar si hay alguien logado


  constructor(private http:HttpClient, private route:Router) {
    this.loginModelBehaviourSubject = new BehaviorSubject<LoginModel | null>(JSON.parse(<string>localStorage?.getItem(LOGIN_KEY)));//TODO
    this.login = this.loginModelBehaviourSubject.asObservable();
   }
   //Log in
  performLogin(entrada: LoginModel):Observable<LoginModel>{
    console.log('performLogin(' +JSON.stringify(entrada) +')');
    return this
    .http
    .post<LoginModel>('https://reqres.in/api/login', entrada)
    .pipe(map(retornoAPI =>{
      //Hacer algo con el resultado
      console.log('Login ok: ' +JSON.stringify(retornoAPI));
      this.loginModelBehaviourSubject.next(retornoAPI);
      localStorage.setItem(LOGIN_KEY,JSON.stringify(retornoAPI));
      
      return retornoAPI;
    }));
  }
  //Log out
  performLogout():void{
    localStorage.removeItem(LOGIN_KEY);
    this.loginModelBehaviourSubject.next(null);
    this.route.navigate(['/login']);
  }
}
