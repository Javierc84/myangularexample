import { AppComponent } from './app.component';
import { ImagesComponent } from './components/images/images.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',
  component: AppComponent
  },
  {
    path:'imagenes',
    component: ImagesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
