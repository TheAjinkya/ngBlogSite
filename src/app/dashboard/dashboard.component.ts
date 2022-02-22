import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogContent } from '../blog-content.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router : Router, private dataSrc: DataService,
     private route: ActivatedRoute) { }

  blogContent:BlogContent[]=[]

  ngOnInit(): void {
    this.blogContent= this.dataSrc.blogData
  }

  createBlog(){
    console.log("create")
    this.router.navigate(['create'])
  }

}
