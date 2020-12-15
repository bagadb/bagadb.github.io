import { Component, OnInit } from '@angular/core';
import { PostComponent } from '../post/post.component';
import postsdata from '../../assets/posts/postdata.json';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-blogpage',
  templateUrl: './blogpage.component.html',
  styleUrls: ['./blogpage.component.css']
})

export class BlogpageComponent implements OnInit {
  
  listOfAllPosts = postsdata;

  numberOfPosts = this.listOfAllPosts.length;
  
  constructor() { }

  ngOnInit(): void {
  }

}
