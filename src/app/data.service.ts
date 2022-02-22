import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogContent } from './blog-content.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  blogData: BlogContent[] = [
    {
      title: 'Cheese cake!',
      content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
      image:
        'https://hips.hearstapps.com/vidthumb/images/delish-blueberry-cheesecake-still003-1557335639.jpg?crop=0.768xw:0.684xh;0.131xw,0.103xh&resize=1200:*',
    },
  ];
 
}
