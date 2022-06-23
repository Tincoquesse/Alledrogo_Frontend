import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alledrogo-top-logo',
  templateUrl: './alledrogo-top-logo.component.html',
  styleUrls: ['./alledrogo-top-logo.component.css']
})
export class AlledrogoTopLogoComponent implements OnInit {

  path: string = "assets/images/logo_alledrogo.png";
  altText: string = "first image"
  constructor() { }

  ngOnInit(): void {
  }

}