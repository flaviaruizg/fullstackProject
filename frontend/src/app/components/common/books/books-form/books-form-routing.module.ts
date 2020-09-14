import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksFormComponent } from './books-form.component';


const routes: Routes = [
  {path:'', component: BooksFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksFormRoutingModule { }
