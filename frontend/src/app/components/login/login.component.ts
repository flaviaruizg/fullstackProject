import { Router } from "@angular/router";
import { AuthService } from "./../../services/common/auth.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { SwalService } from '../../services/common/swal.service';
import { SocialAuthService } from '../../services/common/social-auth.service';
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loggedIn: boolean=null;
  formMessage: string = "";
  isLoaded: boolean;
  formLogin = {
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required, Validators.minLength(8),Validators.maxLength(20)]),
  };
  constructor(
    private service: AuthService,  
    private router: Router,
    public auth0: SocialAuthService,
    private servive: SwalService
    ) {}

  
  formCreate(){
    this.isLoaded= false;
    this.form= new FormGroup(this.formLogin);
    this.isLoaded=true;

  }

  ngOnInit() {
    this.formCreate();

    
  }
 
   async auth(){
    const {name, JWT}: any = await this.service.login(this.form.value);
    console.log(JWT);
    JWT
      ? (sessionStorage.setItem("JWT", JWT), this.router.navigate(["books/consultasBook"]))
      : (this.form.reset(), (this.formMessage = "Datos incorrectos"));
    name ? sessionStorage.setItem("usuario", name) : null;
  }

}


