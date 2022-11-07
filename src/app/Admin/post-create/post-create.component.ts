import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoryService } from 'src/app/Services/category.service';
import { PostService } from 'src/app/Services/post.service';
import { TagService } from 'src/app/Services/tag.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  categories:any
  tags:any
  constructor(private category:CategoryService,private post:PostService,private tag:TagService) { }
  postFromCreate :FormGroup = new FormGroup({
    title:new FormControl(),
    shortDecription:new FormControl(),
    postContent:new FormControl(),
    urlSlug:new FormControl(),
    published:new FormControl(),
    categoryId:new FormControl(),
    tagId:new FormControl()
  });
  ngOnInit(): void {
    this.category.getCategories().subscribe((res:any)=>{
     this.categories = res.result
    })
    this.tag.getTags().subscribe((res:any)=>{
      this.tags = res.result
     })
  }
  onCreate(){
    this.post.create(this.postFromCreate.value).subscribe(data=>{
      console.log(data);
    })
  }
}
