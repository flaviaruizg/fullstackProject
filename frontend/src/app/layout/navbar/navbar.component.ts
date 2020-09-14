import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  routes : any = [
    {link:'/books/consultasBook', detail:'Listado de libros'},
    {link:'/books/form/new', detail:'Add Book'},
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
