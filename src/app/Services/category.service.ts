import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  {Observable} from 'rxjs';
import { Category } from '../models/category';
const _api = 'https://localhost:7001/api/'
@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  constructor(private http: HttpClient) { }
    getCategories(): Observable<Array<Category>> {
      return this.http.get<Array<Category>>(_api+ 'CategoryAPI');
  }
}
