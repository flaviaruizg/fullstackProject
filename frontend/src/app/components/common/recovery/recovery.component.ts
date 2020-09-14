import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RecoveryService } from '../../../services/common/recovery.service';
import { SwalService } from '../../../services/common/swal.service';


@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent implements OnInit {
  formRecovery: FormGroup;
  isLoaded: boolean;


  constructor(
    private service: RecoveryService,
    private swalService :SwalService
  ) { }
  createFormRecovery(){
    this.formRecovery= new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email])
    });
  }
  ngOnInit() {
    this.isLoaded= false;
    this.createFormRecovery();
    this.isLoaded=true;
  }

  async recoverPassword(){
    const {email}= this.formRecovery.value;
    await this.service.getRecovery(email);
    this.formRecovery.reset();
    this.swalService.normalMessage({icon:'info',html:'<h3>Se envio un mail a su casilla</h3>'})
  }

}
