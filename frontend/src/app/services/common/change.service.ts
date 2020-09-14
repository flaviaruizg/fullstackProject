import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class ChangeService extends BaseService {

  getIdAndToken(token) {
    try {
      this.setEndPoint(`changerPassword/${token}`);
      return this.get();
    } catch (error) {
      throw error;
    }
  }

  passwordChange(obj){
    try {
      this.setEndPoint('changerPassword');
      return this.post(obj);
    } catch (error) {
      throw error;
    }
  }
}
