import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {debounceTime} from "rxjs";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() onValueChange = new EventEmitter<string>();

  searchInput = new FormControl('');

  ngOnInit() {
    this.searchInput.valueChanges.pipe(
      debounceTime(600),
    ).subscribe(value => this.onValueChange.emit(value));
  }
}
