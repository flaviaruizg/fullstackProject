import { Injectable } from '@angular/core';

import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class GamesService extends BaseService {

  async gamesAll(){
    try {
      this.setEndPoint('games');
      return this.get();

    } catch (error) {
      throw error;
    }
  }



}


