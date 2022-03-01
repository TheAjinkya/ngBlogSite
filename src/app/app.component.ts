import { Component, ViewChild } from '@angular/core';
import { BlogContent } from './blog-content.model';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngBlogApp';
  @ViewChild(DashboardComponent) dashboard! : DashboardComponent

  blogsAvailable:BlogContent[]=[];

  ngAfterContentInit() {
    console.log("ngAfterContentInit: ", this.dashboard)
  }

  ngAfterViewInit() {
    this.blogsAvailable = this.dashboard.blogContent
    console.log("blogsAvailable: ",this.blogsAvailable)

  }

}
