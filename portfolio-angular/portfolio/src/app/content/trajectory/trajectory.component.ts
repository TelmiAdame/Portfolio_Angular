import { TrajectoryService } from './trajectory.service';
import { Component, OnInit } from '@angular/core';
import { Trajectory } from './trajectory';

@Component({
  selector: 'app-trajectory',
  templateUrl: './trajectory.component.html',
  styleUrls: ['./trajectory.component.scss'],
})
export class TrajectoryComponent implements OnInit {
 
  trajectory = {} as Trajectory
  trajectorys: Trajectory[] = []
  

  constructor(private service: TrajectoryService) {}

  ngOnInit(): void {
    this.service.getTrajectorys().subscribe((trajectorys: Trajectory[]) => {
      this.trajectorys = trajectorys
      console.log(trajectorys)
    });
  }

  clickbox(id: number): void{
    const text = this.trajectorys.filter(trajectory => trajectory.id == id)
    text[0].visible = !text[length].visible 
  }

}

/*
método inicial
let idActive = text[0]
    if(text[0].visible === false){
      text[0].visible = true
    }else{
      text[0].visible = false
    } */