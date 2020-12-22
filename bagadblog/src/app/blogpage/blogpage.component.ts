import { Component, OnInit } from '@angular/core';
import { PostComponent } from '../post/post.component';
import postsData from '../../assets/posts/postdata.json';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-blogpage',
  templateUrl: './blogpage.component.html',
  styleUrls: ['./blogpage.component.css']
})

export class BlogpageComponent implements OnInit {

  stringifiedPostsDataGenerator(postsData) {
    
    var stringifiedPostsData = []

    postsData.forEach(element => {
      var stringifiedPost = JSON.stringify(element)
      stringifiedPostsData.push(stringifiedPost);
    });

    return stringifiedPostsData;
  }
  
  stringifiedPostsData = this.stringifiedPostsDataGenerator(postsData);

  numberOfPosts = this.stringifiedPostsData.length;

  constructor() { }

  ngOnInit(): void {
  }

}
