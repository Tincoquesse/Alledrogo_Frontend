import {Component, Injectable, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AlledrogoService} from "../../../api/service/alledrogo.service";
import {async, map} from "rxjs";
import {Product} from "../../../api/model/product";
import {JwtHelperService} from "@auth0/angular-jwt";



@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-order-snippet',
  templateUrl: './order-snippet.component.html',
  styleUrls: ['./order-snippet.component.css']
})
export class OrderSnippetComponent implements OnInit{

  constructor(public service: AlledrogoService) {
}

  ngOnInit() {
    this.service.updateOrderPrice()
}
}
