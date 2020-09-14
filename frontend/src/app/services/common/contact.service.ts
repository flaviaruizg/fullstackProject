import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService extends BaseService {

  createQuery(obj) {
    try {
      this.setEndPoint('contact');
      return this.post(obj);  
    } catch (error) {
      throw error;
    }
  }
}