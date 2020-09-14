import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksSingleRoutingModule } from './books-single-routing.module';
import { BooksSingleComponent } from './books-single.component';


@NgModule({
  declarations: [BooksSingleComponent],
  imports: [
    CommonModule,
    BooksSingleRoutingModule
  ]
})
export class BooksSingleModule { }
