import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PaginationModule } from 'ng2-bootstrap';


import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/add/add.component';
import { ViewComponent } from './components/view/view.component';

import { PetService } from './services/pet.service';

import { routing } from './app.routing';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, routing, PaginationModule.forRoot()],
  declarations: [AppComponent, HomeComponent, AddComponent, ViewComponent],
  providers: [PetService],
  bootstrap: [AppComponent]
})
export class AppModule { }