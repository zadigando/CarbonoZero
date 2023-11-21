import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title_1:'Login',
      link_1: '/login',
      title_2:'',
      link_2: '',
    }
  }
}
