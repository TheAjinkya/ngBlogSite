import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogContent } from '../blog-content.model';
import { DataService } from '../data.service';
import { from } from 'rxjs'; // from function


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(private router : Router, private dataSrc: DataService,
     private route: ActivatedRoute) { 
      this.blogContent= this.dataSrc.blogData
     }

  blogContent:BlogContent[]=[]


  data : any = from(fetch('https://jsonplaceholder.typicode.com/todos/1')); //Created from Promise
  

  ngOnInit(): void {
    // this.blogContent= this.dataSrc.blogData
    // this.data.subscribe({
    //   next(response:any) { console.log(response); },
    //   error(err:any) { console.error('Error: ' + err); },
    //   complete() { console.log('Completed'); }
    //   });
  }

  createBlog(){
    console.log("create")
    this.router.navigate(['create'])
  }

}
