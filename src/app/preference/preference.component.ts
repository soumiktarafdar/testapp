import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'preference-page',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.css']
})
export class PreferenceComponent implements OnInit {
  constructor(
    private router: Router
  ) {}

  isAuthenticated: boolean;
 
  tags: Array<string> = [];
  tagsLoaded = false;

  ngOnInit() {

  }

}
