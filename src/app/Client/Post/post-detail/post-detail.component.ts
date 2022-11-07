import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/Services/post.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  posts:any
  id:number=0;
  constructor(private post:PostService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((param)=>{
    this.id= param['postId']
    this.post.getDetailPost(this.id).subscribe((res:any)=>{
    this.posts = res.result
    })
    })
  }
}
