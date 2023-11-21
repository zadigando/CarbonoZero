import { EmpresaDataService } from 'src/app/services/empresa.data-service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../header/header.service';
import { ProjetosCompensacao, ProjetosCompensacaoResponse } from 'src/app/models/projetoscompensacao';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-painel-controle',
  templateUrl: './painel-controle.component.html',
  styleUrls: ['./painel-controle.component.css']
})
export class PainelControleComponent{
  projetos: ProjetosCompensacao[] = [];
  
  constructor(
    private router: Router, 
    private headerService: HeaderService, 
    private empresaDataService: EmpresaDataService,
    private fb: FormBuilder,
    ) {
    headerService.headerData = {
      title_1:'Início',
      link_1: '/',
      title_2:'Painel de Créditos',
      link_2: '/painel-credito',
    }
  }

  carregarProjetos(): void {
    this.empresaDataService.getProjetos().subscribe(
      (response: ProjetosCompensacaoResponse) => {
        if (response.Projetos) {
          this.projetos = response.Projetos;
          console.log('Projetos carregados:', this.projetos);
        } else {
          console.error('A resposta da API não contém a propriedade "Projetos" esperada.');
        }
      },
      (error) => {
        console.error('Erro ao carregar projetos:', error);
      }
    );
  }
}
