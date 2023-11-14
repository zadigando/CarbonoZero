import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-painel-controle',
  templateUrl: './painel-controle.component.html',
  styleUrls: ['./painel-controle.component.css']
})
export class PainelControleComponent {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title:'Painel de Créditos',
      link: '/',
    }
  }
}
