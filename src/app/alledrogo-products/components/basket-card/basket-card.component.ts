import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../api/model/product";

@Component({
  selector: 'app-basket-card',
  templateUrl: './basket-card.component.html',
  styleUrls: ['./basket-card.component.css']
})
export class BasketCardComponent implements OnInit {

  @Input() product: Product|undefined;
  @Output() onDoneClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  doneClick = () => {
    this.onDoneClick.emit(this.product?.productName);
  }
}
