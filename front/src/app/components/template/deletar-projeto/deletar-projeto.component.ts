import { EmpresaDataService } from 'src/app/services/empresa.data-service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../header/header.service';
import {
  ProjetosCompensacao,
  ProjetosCompensacaoResponse,
} from 'src/app/models/projetoscompensacao';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-deletar-projeto',
  templateUrl: './deletar-projeto.component.html',
  styleUrls: ['./deletar-projeto.component.css'],
})
export class DeletarProjetoComponent {
  projetos: ProjetosCompensacao[] = [];

  constructor(
    private router: Router,
    private headerService: HeaderService,
    private empresaDataService: EmpresaDataService,
    private fb: FormBuilder
  ) {
    headerService.headerData = {
      title_1: 'Início',
      link_1: '/',
      title_2: 'Painel de Créditos',
      link_2: '/painel-credito',
    };
  }

  ngOnInit(): void {
    this.carregarProjetos();
  }

  carregarProjetos(): void {
    this.empresaDataService.getProjetos().subscribe(
      (response: any) => {
        if (response.projetos && Array.isArray(response.projetos)) {
          this.projetos = response.projetos;
          console.log('Projetos carregados:', this.projetos);
        } else {
          console.error(
            'A resposta da API não contém a propriedade "projetos" esperada:',
            response
          );
        }
      },
      (error) => {
        console.error('Erro ao carregar projetos:', error);
      }
    );
  }

  deletarProjeto(idProjeto: number): void {
    this.empresaDataService.deletarProjeto(idProjeto).subscribe(
      () => {
        console.log(`Projeto com ID ${idProjeto} deletado com sucesso.`);
        // Atualizar a lista de projetos após a exclusão, se necessário
        this.carregarProjetos();
      },
      (error) => {
        console.error(`Erro ao deletar o projeto com ID ${idProjeto}:`, error);
      }
    );
  }
}
