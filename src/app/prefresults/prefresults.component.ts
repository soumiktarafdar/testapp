import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'prefresults-page',
  templateUrl: './prefresults.component.html',
  styleUrls: ['./prefresults.component.css']
})
export class PrefresultsComponent implements OnInit {
  constructor(
    private router: Router
  ) {}

  isAuthenticated: boolean;
 
  tags: Array<string> = [];
  tagsLoaded = false;

  ngOnInit() {

  }

}
