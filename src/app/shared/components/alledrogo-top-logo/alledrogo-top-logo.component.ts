import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alledrogo-top-logo',
  templateUrl: './alledrogo-top-logo.component.html',
  styleUrls: ['./alledrogo-top-logo.component.css']
})
export class AlledrogoTopLogoComponent implements OnInit {

  path: string = "assets/images/linkedin_banner_thick.jpg";
  altText: string = "first image"
  constructor() { }

  ngOnInit(): void {
  }

}
