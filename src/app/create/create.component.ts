import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { PreviewComponent } from '../preview/preview.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private route: Router,
    public dialog: MatDialog
  ) {}

  title: string = '';
  content: string = '';
  isDisabled: boolean = true;
  image: string =
    'https://static.toiimg.com/thumb/53538843.cms?imgsize=163418&width=1000&height=1000';

  combinedData = {
    title: this.title,
    content: this.content,
    image: this.image,
  };

  postBlog() {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      height: '30%',
      width: '25%',
      data: {
        title: this.title,
        content: this.content,
        image: this.image,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result) {
        this.dataService.blogData.push({
          title: this.title,
          content: this.content,
          image: this.image,
        });
        console.log({
          title: this.title,
          content: this.content,
          image: this.image,
        });
        console.log(this.dataService.blogData);
        this.route.navigate(['/']);
      }
    });
  }

  previewBlog() {
    const dialogRef = this.dialog.open(PreviewComponent, {
      data: {
        title: this.title,
        content: this.content,
        image: this.image,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

  confirmPost() {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      data: {
        title: this.title,
        content: this.content,
        image: this.image,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

  ngOnInit(): void {}
}
