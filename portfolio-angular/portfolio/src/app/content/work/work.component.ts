import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WorkService } from './work.service'


@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  works: string[] = []

  constructor(private workService: WorkService) {
    this.works = this.workService.getWorks();
   }

  ngOnInit(): void {} 

}
