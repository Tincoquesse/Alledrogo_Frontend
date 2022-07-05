import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../api/model/product";
import {map} from "rxjs";
import {AlledrogoService} from "../../../api/service/alledrogo.service";
import {TokenStorageService} from "../../../auth/services/token-storage.service";

@Component({
  selector: 'app-alledrogo-navbar',
  templateUrl: './alledrogo-navbar.component.html',
  styleUrls: ['./alledrogo-navbar.component.css']
})
export class AlledrogoNavbarComponent implements OnInit {


  @Input() routes: { label: string, route: string }[] = [];

  constructor(public service: AlledrogoService, private tokenStorage: TokenStorageService) {
  }

  ngOnInit() {
    if (this.tokenStorage.tokenIsPresent()) {
      this.service.updateCounter();
      this.service.updateOrderPrice()
    }
    return
  }
}
