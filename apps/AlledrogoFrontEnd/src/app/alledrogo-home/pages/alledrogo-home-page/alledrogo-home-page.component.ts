import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alledrogo-home-page',
  templateUrl: './alledrogo-home-page.component.html',
  styleUrls: ['./alledrogo-home-page.component.css']
})
export class AlledrogoHomePageComponent implements OnInit {

  path: string = "assets/images/alledrogo_banner.png";
  altText: string = "first image"

  constructor() { }

  ngOnInit(): void {
  }

}
