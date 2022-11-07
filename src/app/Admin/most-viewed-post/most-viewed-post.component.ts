import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-most-viewed-post',
  templateUrl: './most-viewed-post.component.html',
  styleUrls: ['./most-viewed-post.component.css']
})
export class MostViewedPostComponent implements OnInit {
  posts:any

  constructor(private post :PostService) { }

  ngOnInit(): void {
    this.post.mostViewedPost().subscribe((res:any)=>{
     this.posts = res.result
    })
  }
}
