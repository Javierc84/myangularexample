import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginModel } from 'src/app/model/login.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  enviado:boolean = false;

  constructor(private formBuilder:FormBuilder,
              private loginService:LoginService) { 
    this.loginForm = this.formBuilder.group({
      username:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    });
  }

  ngOnInit(): void {
  }

  submitForm(){
    this.enviado = true;
    if(!this.loginForm.valid)
    return;

    this.loginService
    .performLogin(new LoginModel(this.loginForm.controls.username.value,
      this.loginForm.controls.password.value,''))
    .subscribe(respuesta=>{
      console.log(JSON.stringify(respuesta));
    },
    error =>{
      console.log('ERROR:' + JSON.stringify(error));
    })
  }

}
