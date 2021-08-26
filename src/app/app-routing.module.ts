import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookListComponent} from './book/book-list/book-list.component';
import {BookCreateComponent} from './book/book-create/book-create.component';
import {BookEditComponent} from './book/book-edit/book-edit.component';
import {BookDeleteComponent} from './book/book-delete/book-delete.component';
import {BookDetailComponent} from './book/book-detail/book-detail.component';

const routes: Routes = [{
  path: 'book/list',
  component: BookListComponent
}, {
  path: 'book/create',
  component: BookCreateComponent
}, {
  path: 'book/edit/:id',
  component: BookEditComponent
}, {
  path: 'book/delete/:id',
  component: BookDeleteComponent
}, {
  path: 'book/detail/:id',
  component: BookDetailComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
