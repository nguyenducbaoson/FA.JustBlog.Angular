import { DatePipe } from "@angular/common";

export class Post {
  PostId:number =0;
  Title:string="";
  ShortDecription:string="";
  PostContent:string ="";
  UrlSlug:string="";
  Published:string="";
  categoryName:string="";
  ViewCount:number=0;
  TagName:Array<string>=[];
  CommentId:Array<number>=[];
  postOn?: Date;
}
