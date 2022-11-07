import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  posts:any

  constructor(private post :PostService) { }

  ngOnInit(): void {
    this.post.getList().subscribe((res:any)=>{
     this.posts = res.result
    })
  }
}
