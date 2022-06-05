import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesComponent } from './images/images.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    ImagesComponent,
    LoginComponent
  ],
  imports: [
    //Los módulos que necesitamos usar con la aplicación
    CommonModule,
    NgbCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class ComponentsModule { }
