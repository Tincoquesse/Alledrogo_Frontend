import {Component, OnChanges, OnInit} from '@angular/core';
import {TokenStorageService} from "../../../auth/services/token-storage.service";
import {AlledrogoService} from "../../../api/service/alledrogo.service";

@Component({
  selector: 'app-alledrogo-top-logo',
  templateUrl: './alledrogo-top-logo.component.html',
  styleUrls: ['./alledrogo-top-logo.component.css']
})
export class AlledrogoTopLogoComponent implements OnInit{

  path: string = "assets/images/linkedin_banner_thick.jpg";
  altText: string = "first image"

  constructor(private alleService: AlledrogoService, public tokenStorage: TokenStorageService ) { }

  ngOnInit(): void {
    this.getUsername();
  }

  getUsername():string {
    return this.alleService.getUserNameFromToken();
  }


}
