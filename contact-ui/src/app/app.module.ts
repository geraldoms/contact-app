import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactService } from './services/contact.service';
import { HomeComponent } from './components/home/home.component';
import { ViewContactComponent } from './components/view-contact/view-contact.component';
import { RegistrationContactComponent } from './components/registration-contact/registration-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewContactComponent,
    RegistrationContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
