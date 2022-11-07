import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  {Observable} from 'rxjs';
import {  } from '../models/category';
import { Tag } from '../models/tag';
const _api = 'https://localhost:7001/api/'
@Injectable({
  providedIn: 'root'
})
export class TagService {
  constructor(private http: HttpClient) { }
    getTags(): Observable<Array<Tag>> {
      return this.http.get<Array<Tag>>(_api+ 'TagAPI');
  }
}
