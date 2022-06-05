import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesComponent } from './images/images.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ImagesComponent
  ],
  imports: [
    //Los módulos que necesitamos usar con la aplicación
    CommonModule,
    NgbCarouselModule,
    FormsModule,
    NgbModule
  ]
})
export class ComponentsModule { }
