import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksFormRoutingModule } from './books-form-routing.module';
import { BooksFormComponent } from './books-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [BooksFormComponent],
  imports: [
    CommonModule,
    BooksFormRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BooksFormModule { }
