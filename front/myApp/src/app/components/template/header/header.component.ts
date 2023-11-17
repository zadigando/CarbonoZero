import { Component } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private headerService: HeaderService){}


  get title_1(): string {
    return this.headerService.headerData.title_1
  }

  get title_2(): string {
    return this.headerService.headerData.title_2
  }

  get link_1(): string {
    return this.headerService.headerData.link_1
  }

  get link_2(): string {
    return this.headerService.headerData.link_2
  }

}
