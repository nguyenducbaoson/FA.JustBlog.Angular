import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  categories:any

  constructor(private category: CategoryService) { }

  ngOnInit(): void {
    this.category.getCategories().subscribe((res:any)=>{
     this.categories = res.result
    })
  }

}
