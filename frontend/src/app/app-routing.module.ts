import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeModule } from './components/common/home/home.module';
import { AboutModule } from './components/common/about/about.module';
import { ContactModule } from './components/common/contact/contact.module';
import { LoginModule } from './components/login/login.module';


import { SignupModule } from './components/signup/signup.module';
import { AuthGuard } from './auth.guard';
import { RecoveryModule } from './components/common/recovery/recovery.module';
import { ChangeModule } from './components/common/change/change.module';
import { BooksAllModule } from './components/common/books/books-all/books-all.module';
import { BooksFormModule } from './components/common/books/books-form/books-form.module';
import { BooksSingleModule } from './components/common/books/books-single/books-single.module';
import { CalendarModule } from './components/common/calendar/calendar.module';





const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},
   
  {path : 'login',loadChildren: ()=> LoginModule},
  {path: 'home', loadChildren: ()=> HomeModule},
  {path: 'about', loadChildren:()=> AboutModule},
  {path: 'contact', loadChildren: ()=> ContactModule},
 
  {path: 'signup', loadChildren: ()=> SignupModule},
  {path: 'recovery', loadChildren:()=> RecoveryModule},
  {path: 'recovery/:mail', loadChildren:()=> RecoveryModule},
  {path: 'change/:token', loadChildren:()=> ChangeModule},
  {path: 'calendar', loadChildren:()=> CalendarModule},
  //CRUD :BOOKS
  {path: 'books/consultasBook', loadChildren:()=> BooksAllModule, data: {showNavbar: true, hideHeader: false}},
  {path: 'books/form/:id', loadChildren:()=> BooksFormModule,  data: {showNavbar: true}},
  {path: 'books/single/:id', loadChildren:()=> BooksSingleModule,  data: {showNavbar: true}},
  {path: 'books/delete/:id', loadChildren:()=> BooksAllModule,  data: {showNavbar: true}},
  {path: 'books/update/:id', loadChildren:()=> BooksAllModule,  data: {showNavbar: true}},
  
  
  {path: '**', redirectTo: '/home'}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
