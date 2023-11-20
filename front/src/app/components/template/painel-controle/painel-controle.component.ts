import { EmpresaDataService } from 'src/app/services/empresa.data-service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../header/header.service';
import { ProjetosCompensacao } from 'src/app/models/projetoscompensacao';

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

  DeletaProjeto() {
    const projetoId = document.getElementById("Id") as HTMLInputElement;
    const projetoNome = document.getElementById("Nome") as HTMLInputElement;
    const projetoDataIncio = document.getElementById("DataInicio") as HTMLInputElement;
    const projetoCompensacao = new ProjetosCompensacao();

    if (projetoId.value !== null
      && projetoNome.value !== null
      && projetoDataIncio.value !== null) {

      //projetoCompensacao.id = projetoId.value;
      projetoCompensacao.nomeProjeto = projetoNome.value;
      //projetoCompensacao.dataInicio = projetoDataIncio.value;
      
      this.empresaDataService.cadastrar(projetoCompensacao).subscribe(
        resposta => {
          // Lida com a resposta do serviço de login
          console.log('Projeto deletado com sucesso', resposta);
          // Redirecione para a página principal ou faça outras ações necessárias
        },
        erro => {
          console.error('Erro ao deletar projeto', erro);
          // Lida com erros, como exibir uma mensagem ao usuário
        }
      );
    } else {
      console.error("Projeto com ID 'Id' não encontrado.");
    }
  }
}
