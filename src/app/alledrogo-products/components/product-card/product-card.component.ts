import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../api/model/product";
import {TokenStorageService} from "../../../auth/services/token-storage.service";
import {Router} from "@angular/router";
import {RoutesConfig} from "../../../app-routing.module";
import {AlledrogoService} from "../../../api/service/alledrogo.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {


  @Input() product: Product| undefined;

  @Output() onDoneClick = new EventEmitter<Product>();

  constructor(public tokenStorage: TokenStorageService, private route: Router,
              public service: AlledrogoService) { }

  ngOnInit(): void {
  }

  refreshPage() {
    window.location.reload();
  }

  doneClick = () => {
    this.onDoneClick.emit(this.product);
  };

  toLogWindowClick() {
    this.route.navigateByUrl(RoutesConfig.loginPage);
  }
}
