import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksAllRoutingModule } from './books-all-routing.module';
import { BooksAllComponent } from './books-all.component';


@NgModule({
  declarations: [ BooksAllComponent],
  imports: [
    CommonModule,
    BooksAllRoutingModule
  ]
})
export class BooksAllModule { }
