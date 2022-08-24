import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {debounceTime} from "rxjs";
import {AlledrogoService} from "../../../api/service/alledrogo.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {


  searchInput = new FormControl('');

  constructor(private service: AlledrogoService) {;

  }


  ngOnInit() {
    this.searchInput.valueChanges.pipe(
      debounceTime(600),
    ).subscribe(value => {
      console.log(value)
      this.service.zzz(this.searchInput.value)
      this.service.searchProduct.subscribe(x => console.log('xxx', x))
    });
  }

}
