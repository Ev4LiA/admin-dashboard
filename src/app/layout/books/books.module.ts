import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BooksComponent } from './books.component';


@NgModule({
  declarations: [
    BookListComponent,
    BooksComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
