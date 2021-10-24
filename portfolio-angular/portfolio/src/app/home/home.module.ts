import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HamburguerComponent } from './hamburguer/hamburguer.component';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent,
    HamburguerComponent
  ],
  imports: [
    CommonModule, 
    RouterModule
  ], 
  exports: [
    HomeComponent,
    HamburguerComponent
  ]
})
export class HomeModule { }
