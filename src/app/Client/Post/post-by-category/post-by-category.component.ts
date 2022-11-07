import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/Services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-by-category',
  templateUrl: './post-by-category.component.html',
  styleUrls: ['./post-by-category.component.css']

})
export class PostByCategoryComponent implements OnInit {
  posts:any
  CategoryName:string="";
  constructor(private post:PostService,private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params.subscribe((param)=>{
    this.CategoryName= param['categoryName']
    this.post.getPostsByCategory(this.CategoryName).subscribe((res:any)=>{
    this.posts = res.result
    })
    })
  }
}


