import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  routes : any = [
    { link: '/home', detail: 'Home' },
    { link: '/about', detail: 'About' },
    { link: '/contact', detail: 'Contact' },
    { link: '/signup', detail: 'Sign up' },
    { link: '/login', detail: 'login' },
  
  ];
  
  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  logout() {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['login']);
  }

}

























/*import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    routes : any = [
      {link: '/home', datail:'Home'},
      {link:'/about', datail:'About'},
      {link: '/contact', datail:'Contact'}
    ]
  constructor(private router : Router) { }

  ngOnInit() {
   console.log(this.routes);
    
  }

}*/
