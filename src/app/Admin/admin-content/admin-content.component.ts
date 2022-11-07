import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/Services/post.service';
@Component({
  selector: 'app-admin-content',
  templateUrl: './admin-content.component.html',
  styleUrls: ['./admin-content.component.css']
})
export class AdminContentComponent implements OnInit {
  posts:any

  constructor(private post :PostService) { }

  ngOnInit(): void {
    this.post.getList().subscribe((res:any)=>{
     this.posts = res.result
    })
  }
}
