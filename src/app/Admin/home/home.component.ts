import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts:any

  constructor(private post :PostService) { }

  ngOnInit(): void {
    this.post.getList().subscribe((res:any)=>{
     this.posts = res.result
    })
  }
}
