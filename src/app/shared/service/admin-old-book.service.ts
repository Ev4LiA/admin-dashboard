import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {OldBookModel} from "../../layout/old-book/helper/model/OldBook.model";

@Injectable({
  providedIn: 'root'
})
export class AdminOldBookService {
  adminBaseUrl: string;
  baseUrl: string;

  constructor(private api: ApiService) {
    this.adminBaseUrl = 'http://61.28.231.221:45/admin/ob';
    this.baseUrl = 'http://61.28.231.221:45/old-book';
    // this.baseUrl = 'http://localhost:3000/old-book';
  }

    getOldBookList(): Observable<OldBookModel[]> {
      return this.api.get({path: this.baseUrl});
    }
    getOldBookDetail(id: string): Observable<OldBookModel> {
      let url = `/${id}`;
      return this.api.get({path: this.baseUrl + url});
    }
}
