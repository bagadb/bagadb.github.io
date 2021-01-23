import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { fromEventPattern } from 'rxjs';

import { BlogComponent } from './blog.component';
import { BloghomeComponent } from './bloghome/bloghome.component'

const routes: Routes = [
  {
    path: ':slug',
    component: BlogComponent,
  },
  {
    path: '',
    component: BloghomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}

