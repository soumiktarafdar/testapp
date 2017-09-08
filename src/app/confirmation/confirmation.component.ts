import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'confirmation-page',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  constructor(
    private router: Router
  ) {}

  isAuthenticated: boolean;
 
  tags: Array<string> = [];
  tagsLoaded = false;

  ngOnInit() {

  }

}
