import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';




@NgModule({
  declarations: [HeaderComponent, NavbarComponent],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    HeaderComponent,
    NavbarComponent
   
  ]
})
export class LayoutModule { }
