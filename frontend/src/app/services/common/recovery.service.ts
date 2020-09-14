import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class RecoveryService extends BaseService {

  getRecovery(email){
    try {
      this.setEndPoint(`recovery/${email}`);
      return this.get();
      
    } catch (error) {
      throw error;
    }
  }
 
}
