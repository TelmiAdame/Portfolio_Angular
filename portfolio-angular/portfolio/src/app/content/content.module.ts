import { WorkService } from './work/work.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentComponent } from './content.component';
import { TrajectoryComponent } from './trajectory/trajectory.component';
import { WorkComponent } from './work/work.component';



@NgModule({
  declarations: [
    ContentComponent,
    TrajectoryComponent,
    WorkComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ContentComponent,
    TrajectoryComponent,
    WorkComponent
  ], 
  providers: [
    WorkService
  ]
})
export class ContentModule { }
