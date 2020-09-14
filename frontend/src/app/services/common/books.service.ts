import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class BooksService extends BaseService {

 

  getAll(){
    try {
      this.setEndPoint('books/consultasBook');
      return this.get();
    } catch (error) {
      throw error;
    }
  }
  


  createBook(book){
    try {
      this.setEndPoint('books');
      return this.post(book);
    } catch (error) {
      throw error;
    }
  }

  singleBook(id){
    try {
      this.setEndPoint(`books/single/${id}`);
      return this.get();
    } catch (error) {
      throw error;
    }
  }

  async updateBook(id,obj){
    try {
     this.setEndPoint(`books/update/${id}`);
      return this.post(obj);
    } catch (error) {
      throw error;
    }
  }
  deleteBook(id){
    try {
      this.setEndPoint(`books/delete/${id}`);
      return this.delete();
    } catch (error) {
      throw error;
    }
  }

  
}

