import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showNavbar : boolean = false;
  hideHeader:boolean=false;
  constructor (private router: Router,
    private activatedRoute: ActivatedRoute){}

  ngOnInit(){
  this.router.events.subscribe(event=>{
    if(event instanceof NavigationEnd){
        this.showNavbar= this.activatedRoute.firstChild.snapshot.data.showNavbar;
        this.hideHeader=this.activatedRoute.firstChild.snapshot.data.hideHeader;
    }

  })
  }

}
