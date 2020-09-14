import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../../../services/common/books.service';

@Component({
  selector: 'app-books-all',
  templateUrl: './books-all.component.html',
  styleUrls: ['./books-all.component.css']
})
export class BooksAllComponent implements OnInit {

  books: any;

  constructor(private service: BooksService) { }

  /*async getAllBooks(){
    this.books = await this.service.getAll();
  }

  

  async bookDelete(id){
    await this.service.deleteBook(id);
  }*/
  async ngOnInit() {

    await this.allBooks();
  }

  async allBooks(){

    const result : any = await this.service.getAll();
    this.books=result.result;
  }


  async bookDelete (id){
    await this.service.deleteBook(id);
    this.allBooks();
  }

  async update(id,obj){
    await this.service.updateBook(id,obj);
    this.allBooks();
  }
}


