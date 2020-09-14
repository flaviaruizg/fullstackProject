import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../../../services/common/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  formContact: FormGroup;
  isLoaded: boolean;
  fla: any = {};
  
  
  constructor(
    private service : ContactService) { }

createConsultForm(){
  this.formContact = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.max(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [Validators.required, Validators.max(50)]),
    message: new FormControl('', [Validators.required, Validators.max(1000)])
  })
}


  ngOnInit() {
    this.fla ={
      directions:'358 senillosa, CABA, Buenos aires',
      mail: 'flaviaarg685@gmail.com',
      tel:'1158987437',

    }
    this.isLoaded=false;
    this.createConsultForm(),
    this.isLoaded=true;
  }

  async sendForm(){
    await this.service.createQuery(this.formContact.value);
    this.formContact.reset();
  }

}
