import { GuardsModule } from './guards/guards.module';
import { FormsModule } from '@angular/forms';
import { InterceptorsModule } from './interceptors/interceptors.module';
import { ComponentsModule } from './components/components.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ComponentsModule,
    InterceptorsModule,
    FormsModule,
    GuardsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
