import { EmpresaDataService } from 'src/app/services/empresa.data-service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-painel-controle',
  templateUrl: './painel-controle.component.html',
  styleUrls: ['./painel-controle.component.css']
})
export class PainelControleComponent {
  projetoId: number | undefined;
  
  constructor(private router: Router, private headerService: HeaderService, private empresaDataService: EmpresaDataService) {
    headerService.headerData = {
      title_1:'Início',
      link_1: '/',
      title_2:'Painel de Créditos',
      link_2: '/painel-credito',
    }
  }
  criarProjeto() {
    const novoProjeto = {
      // Preencha com os dados do novo projeto, se necessário
    };

    this.empresaDataService.criarProjeto(novoProjeto).subscribe(
      response => {
        console.log(response); // Trate a resposta conforme necessário
      },
      error => {
        console.error(error); // Trate o erro conforme necessário
      }
    );
  }

  deletarProjeto() {
    this.empresaDataService.deletarProjeto(this.projetoId!).subscribe(
      response => {
        console.log(response); // Trate a resposta conforme necessário
      },
      error => {
        console.error(error); // Trate o erro conforme necessário
      }
    );
  }
}
