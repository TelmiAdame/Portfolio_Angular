import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WorkService } from './work.service'
import { Work } from './work';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  works: any[] = []
  work = {} as Work
  visibleModal:boolean = false

  constructor(private workService: WorkService) {}

  ngOnInit(): void {
    this.workService.getWorks().subscribe((works: Work[]) => {
      this.works = works
      console.log(works)
    });
  }
  
  openModal(){
    this.visibleModal = true
 }
  closeModal(){
    this.visibleModal = false
  }
  
}
