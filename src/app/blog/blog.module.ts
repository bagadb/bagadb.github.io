import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {BlogRoutingModule} from './blog-routing.module';
import {BlogComponent} from './blog.component';
import { BloghomeComponent } from './bloghome/bloghome.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [BlogComponent, BloghomeComponent, ContentComponent],
  imports: [CommonModule, BlogRoutingModule, ScullyLibModule],
})
export class BlogModule {}
