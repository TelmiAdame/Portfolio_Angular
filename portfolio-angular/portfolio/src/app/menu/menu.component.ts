import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { 

  }

}

/*
//TESTES 01 https://www.youtube.com/watch?v=z9hwWIlyHb0&t=183s
  toTrajectory() {
    //this.router.navigate({fragment:"work"})
  }
  toWork(){
    //document.getElementById("work")?.scrollIntoView({behavior:"smooth"});
  }

  toContact() {
   //document.getElementById("contact")?.scrollIntoView({behavior:"smooth"});
  }

  */