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
  selector: 'app-painel-controle',
  templateUrl: './painel-controle.component.html',
  styleUrls: ['./painel-controle.component.css'],
})
export class PainelControleComponent {
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

  formatarParaCSV(dados: any[]): string {
    // Cabeçalhos do CSV
    const cabecalhos = Object.keys(dados[0]).join(',');

    // Conteúdo do CSV
    const linhasCSV = dados.map((item) => {
      return Object.values(item)
        .map((valor) => {
          // Tratamento para valores que podem conter vírgulas
          if (typeof valor === 'string' && valor.includes(',')) {
            valor = `"${valor}"`; // Adiciona aspas para evitar quebras na formatação do CSV
          }
          return valor;
        })
        .join(',');
    });

    // Retorna o cabeçalho e as linhas do CSV
    return cabecalhos + '\n' + linhasCSV.join('\n');
  }

  baixarArquivoCSV(conteudoCSV: string, nomeArquivo: string): void {
    const linkDownload = document.createElement('a');
    linkDownload.setAttribute(
      'href',
      'data:text/csv;charset=utf-8,' + encodeURIComponent(conteudoCSV)
    );
    linkDownload.setAttribute('download', nomeArquivo);
    linkDownload.style.display = 'none';

    document.body.appendChild(linkDownload);
    linkDownload.click();
    document.body.removeChild(linkDownload);
  }

  exportarDadosParaCSV(): void {
    this.empresaDataService.getProjetos().subscribe(
      (response: any) => {
        const projetos = response ? response.projetos : null;

        if (projetos && projetos.length > 0) {
          const dadosCSV = this.formatarParaCSV(projetos);
          const nomeArquivo = 'dados.csv';
          this.baixarArquivoCSV(dadosCSV, nomeArquivo);
        } else {
          console.error(
            'A resposta da API não contém a lista de projetos esperada.'
          );
        }
      },
      (error: any) => {
        console.error('Erro ao obter dados:', error);
      }
    );
  }
}
