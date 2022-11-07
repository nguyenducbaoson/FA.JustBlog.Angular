import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Client/footer/footer.component';
import { NavigationComponent } from './Client/navigation/navigation.component';
import { PageHeaderComponent } from './Client/page-header/page-header.component';
import { MainContentComponent } from './Client/main-content/main-content.component';
import {HttpClientModule} from '@angular/common/http';
import { PostByCategoryComponent } from './Client/Post/post-by-category/post-by-category.component';
import { BannerComponent } from './Client/banner/banner.component';
import { PostDetailComponent } from './Client/Post/post-detail/post-detail.component';
import { HomeComponent } from './Admin/home/home.component';
import { ContentComponent } from './Client/content/content.component';
import { MostViewedPostComponent } from './Admin/most-viewed-post/most-viewed-post.component';
import { MenuComponent } from './Admin/menu/menu.component';
import { AdminContentComponent } from './Admin/admin-content/admin-content.component';
import { SearchBarComponent } from './Admin/search-bar/search-bar.component';
import { LoginComponent } from './Client/login/login.component';
import { NgForm, ReactiveFormsModule } from '@angular/forms';
import { PostCreateComponent } from './Admin/post-create/post-create.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    PageHeaderComponent,
    MainContentComponent,
    PostByCategoryComponent,
    BannerComponent,
    PostDetailComponent,
    HomeComponent,
    ContentComponent,
    MostViewedPostComponent,
    MenuComponent,
    AdminContentComponent,
    SearchBarComponent,
    LoginComponent,
    PostCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
