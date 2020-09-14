import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksAllComponent } from './books-all.component';


const routes: Routes = [ 
  {path:'', component: BooksAllComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksAllRoutingModule { }
