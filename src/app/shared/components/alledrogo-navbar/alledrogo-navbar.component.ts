import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../api/model/product";
import {map} from "rxjs";
import {AlledrogoService} from "../../../api/service/alledrogo.service";

@Component({
  selector: 'app-alledrogo-navbar',
  templateUrl: './alledrogo-navbar.component.html',
  styleUrls: ['./alledrogo-navbar.component.css']
})
export class AlledrogoNavbarComponent implements OnInit {


  @Input() routes: { label: string, route: string }[] = [];

  // count: number|undefined;


  constructor(public service: AlledrogoService) {
  }
  ngOnInit() {
  this.service.updateCounter();
  // this.count = this.service.count;
  }
}
