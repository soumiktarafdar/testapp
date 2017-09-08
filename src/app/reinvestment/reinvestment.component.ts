import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'reinvestment-page',
  templateUrl: './reinvestment.component.html',
  styleUrls: ['./reinvestment.component.css']
})
export class ReinvestmentComponent implements OnInit {
  constructor(
    private router: Router
  ) {}

  isAuthenticated: boolean;
 
  tags: Array<string> = [];
  tagsLoaded = false;

  ngOnInit() {

  }

}
