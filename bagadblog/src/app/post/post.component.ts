import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Content } from '@angular/compiler/src/render3/r3_ast';

import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {

  private _stringifiedPost: any;

  private _titleOfPost = ''; 
  private _pathOfPost= '';
  private _dateOfPost= '';

  @Input() 
  get stringifiedPost(): string {
    return this._stringifiedPost;
  }

  title = this._titleOfPost;
  path = this._pathOfPost;
  date = this._dateOfPost;

  contentOfPost: string;

  set stringifiedPost(value: string){
    this._stringifiedPost = JSON.parse(value);

    this.title = this._stringifiedPost.title;
    this.path = this._stringifiedPost.path;
    this.date = this._stringifiedPost.date;

    this.http.get(this.path, { observe: 'body', responseType: 'text' }).subscribe(data => {
      this.contentOfPost = data;
    })
  }

  /*
  contentOfPost = this.http.get(this.path, { observe: 'body',responseType: 'text' } ).subscribe(data => {
    console.log(data);
  })
  */

  constructor(private http: HttpClient ) { }

  ngOnInit(): void {

  }

}
