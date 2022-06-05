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
  errorMsg!:string | null;
  isLoading:boolean = false;

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

    let loginModel = new LoginModel(this.loginForm.controls.username.value,
      this.loginForm.controls.password.value,'');
      
    this.isLoading = true;

    this.loginService
    .performLogin(loginModel)
    .subscribe(respuesta=>{
      console.log(JSON.stringify(respuesta));
      this.isLoading = false;
      
    },
    error => {
      console.log('ERROR:' + JSON.stringify(error));
      this.errorMsg = `No se ha podido iniciar sesion (${error.error?.error})`;
      this.isLoading = false;
    },
    ()=>{
      this.isLoading = false;
    });
  }

}
