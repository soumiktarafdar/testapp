import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'verification-page',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
  constructor(
    private router: Router
  ) {}

  isAuthenticated: boolean;
 
  tags: Array<string> = [];
  tagsLoaded = false;

  ngOnInit() {

  }

}
