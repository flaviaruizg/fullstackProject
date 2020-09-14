import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksSingleComponent } from './books-single.component';


const routes: Routes = [
  {path:'', component: BooksSingleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksSingleRoutingModule { }
