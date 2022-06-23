import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-alledrogo-navbar',
  templateUrl: './alledrogo-navbar.component.html',
  styleUrls: ['./alledrogo-navbar.component.css']
})
export class AlledrogoNavbarComponent implements OnInit {

  @Input() routes: { label: string, route: string }[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
