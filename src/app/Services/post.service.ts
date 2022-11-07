import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }
  getPostsByCategory(categoryName:string):Observable<Post>{
    return this.http.get<any>('https://localhost:7001/api/PostAPI/GetPostsByCategory/'+categoryName);
  }
  getList():Observable<Post>{
    return this.http.get<any>('https://localhost:7001/api/PostAPI');
  }
  getDetailPost(PostId:number):Observable<any>{
    return this.http.get<any>('https://localhost:7001/api/PostAPI/'+PostId);
  }
  mostViewedPost():Observable<Post>{
    return this.http.get<any>('https://localhost:7001/api/PostAPI/MostViewedPosts/5');
  }
  create(data:any):Observable<any>{
    return this.http.post<any>('https://localhost:7001/api/PostAPI',data);
  }
}
