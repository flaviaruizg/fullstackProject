import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeService } from '../../../services/common/change.service';
import { SwalService } from '../../../services/common/swal.service';



@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent implements OnInit {


  formChangerPassword : FormGroup;
  isLoaded:boolean;
  token: any;
  user: any;
  message: any;
  router: any;

  constructor(
    private Router: Router,
    private activatedRoute: ActivatedRoute,
    private service: ChangeService,
    private swalService : SwalService

  ) { }

  createFormChangePassword() {
    this.formChangerPassword = new FormGroup({
      password : new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      repeatPassword : new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)])
    });
  }
  

  async ngOnInit() {
    this.token = this.activatedRoute.snapshot.params.token;
    console.log(this.token);
    this.user = await this.service.getIdAndToken(this.token);
    console.log(this.user);
    
    this.isLoaded = false;
    this.createFormChangePassword();
    this.isLoaded = true;
  }

  async passwordChanger(){
    console.log(this.formChangerPassword.get('password').value);
    if(this.formChangerPassword.get('password').value == this.formChangerPassword.get('repeatPassword').value) {
      console.log(this.user.id.id);
      const userUpdated = {
        id: this.user.id.id,
        
        password: this.formChangerPassword.get('password').value
        
      }
      await this.service.passwordChange(userUpdated);
      this.swalService.normalMessage({icon:'success',html:'CONTRASEÑA CAMBIADA 👌'});
      this.formChangerPassword.reset();
      this.router.navigate(['home']);
     
      
    } else {
      this.message = "Error to change the password!";
    }
  }

}
