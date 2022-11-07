import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Admin/home/home.component';
import { MainContentComponent } from './Client/main-content/main-content.component';
import { PostByCategoryComponent } from './Client/Post/post-by-category/post-by-category.component';
import { PostDetailComponent } from './Client/Post/post-detail/post-detail.component';
import { ContentComponent } from './Client/content/content.component';
import { AdminContentComponent } from './Admin/admin-content/admin-content.component';
import { MostViewedPostComponent } from './Admin/most-viewed-post/most-viewed-post.component';
import { LoginComponent } from './Client/login/login.component';
import { PostCreateComponent } from './Admin/post-create/post-create.component';
const routes: Routes = [

    {path:"",
    component:ContentComponent,
      children:[
        {path:"post-by-category/:categoryName",component:PostByCategoryComponent},
        {path:"post-detail/:postId",component:PostDetailComponent},
        {path:"",component:MainContentComponent}
      ],

    },
    {path:"Admin",component:HomeComponent,
    children:[
      {path:"",component:AdminContentComponent},
      {path:"most-viewed-post",component:MostViewedPostComponent},
      {path:"post-create",component:PostCreateComponent}
    ]
  },
  {path:"Login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
