import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { PreviewComponent } from '../preview/preview.component';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private dataService: DataService, private route: Router,
    public dialog: MatDialog) { }

  title:string='';
  content:string='';
  isDisabled:boolean = true
  image:string='https://static.toiimg.com/thumb/53538843.cms?imgsize=163418&width=1000&height=1000'

  combinedData = {
    title :this.title,
    content: this.content,
    image: this.image
  }

  postBlog(){
    this.dataService.blogData.push({
      title :this.title,
      content: this.content,
      image: this.image
    })
    console.log({
      title :this.title,
      content: this.content,
      image: this.image
    })
    console.log(this.dataService.blogData)
    this.route.navigate(['/'])
  
  }

  previewBlog(){
    const dialogRef = this.dialog.open(PreviewComponent, {
      data: {
        title :this.title,
        content: this.content,
        image: this.image
      }
    })
    dialogRef.afterClosed().subscribe(result=>{
      console.log(result)
    })
  }

  ngOnInit(): void {
  }

}
