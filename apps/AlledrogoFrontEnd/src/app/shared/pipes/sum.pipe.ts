import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "../../api/model/product";

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {

  transform(value: Product[]): number {
    let temp = 0;
    for (let product of value){
      temp += product.productPrice
    }
    return temp;
  }

}
