import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class SignupService extends BaseService{

  create(obj){
    try {
      this.setEndPoint('signup');
      return this.post(obj);
    } catch (error) {
      throw error;
    }
  };

}
