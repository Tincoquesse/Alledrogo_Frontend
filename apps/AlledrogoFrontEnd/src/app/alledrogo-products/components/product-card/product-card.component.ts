import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../api/model/product";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {


  @Input() product: Product| undefined;

  @Output() onDoneClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  refreshPage() {
    window.location.reload();
  }

  doneClick = () => {
    this.onDoneClick.emit(this.product?.productName);
  };
}
