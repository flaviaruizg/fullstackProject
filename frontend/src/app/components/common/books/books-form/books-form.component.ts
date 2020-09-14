import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../../../../services/common/books.service';

@Component({
  selector: 'app-books-form',
  templateUrl: './books-form.component.html',
  styleUrls: ['./books-form.component.css']
})
export class BooksFormComponent implements OnInit {

  id: string;
  isloaded: boolean;
  form: FormGroup;
  formCreate: any = {author: '', title:''};
  btnCreate: boolean=false;
  btnUpdate: boolean=false;
  message: string;
  book: any;
  constructor(private activatedRoute : ActivatedRoute,
    private service: BooksService) { }
  
  createForm(obj){
    this.isloaded= false;
    this.form =new FormGroup({
      author : new FormControl(obj.author, [Validators.required]),
      title: new FormControl(obj.title, [Validators.required])
    })
    this.isloaded=true;
  }

  async getBook(id){
    const result : any= await this.service.singleBook(id);
    console.log(result[0]);
    this.book= result.book;
  }
  async ngOnInit() {
    this.id= this.activatedRoute.snapshot.params.id;
    console.log(this.id);
    if(this.id=='new'){
      console.log(this.id);
      this.createForm(this.formCreate);
      this.btnCreate=true;
      this.message='add';
    }else{
      console.log(this.id);
      await this.getBook(this.id);
      this.createForm(this.book);
      this.btnUpdate= true;
      this.message= 'update true';
    }
  }

  async bookCreator (){
    await this.service.createBook(this.form.value);
    this.form.reset();
  }

  async bookUpdate(){
    await this.service.updateBook(this.id, this.form.value);
  }

  async sendForm(){
    if(this.id=='new')
      await this.bookCreator();
    else
      await this.bookUpdate();
  }

  async bookDelete(){
    await this.service.deleteBook(this.id);
  }



}
