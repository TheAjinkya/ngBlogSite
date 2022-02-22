import { Component, Inject, OnInit } from '@angular/core';
// import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BlogContent } from '../blog-content.model';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PreviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    blogContent:BlogContent[]=[]

  ngOnInit(): void {
    this.blogContent.push(this.data)
    console.log(this.blogContent)
  }

}
