import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpresaDataService } from 'src/app/services/empresa.data-service';
import { ProjetosCompensacao } from 'src/app/models/projetoscompensacao';
import { Empresa } from '../../../models/empresa';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-projeto',
  templateUrl: './criar-projeto.component.html',
  styleUrls: ['./criar-projeto.component.css'],
})
export class CriarProjetoComponent implements OnInit {
  projetoForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private empresaDataService: EmpresaDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.projetoForm = this.fb.group({
      nomeProjeto: [''],
      descricaoProjeto: [''],
      descricaoMedida: [''],
      dataConclusao: [''],
      impactoEmissaoCarbono: [''],
    });
  }

  CriarProjeto(): void {
    const projetos: ProjetosCompensacao = {
      id: 0,
      nomeProjeto: this.projetoForm.get('nomeProjeto')!.value,
      descricaoProjeto: this.projetoForm.get('descricaoProjeto')!.value,
      descricaoMedida: this.projetoForm.get('descricaoMedida')!.value,
      dataConclusao: this.projetoForm.get('dataConclusao')!.value,
      impactoEmissaoCarbono: this.projetoForm.get('impactoEmissaoCarbono')!
        .value,
      dataInicio: new Date(Date.now()),
      dataMedida: new Date(Date.now()),
    };

    this.empresaDataService.criarProjeto(projetos).subscribe(
      (response) => {
        console.log('Projeto criado:', response.Mensagem);
        this.router.navigate(['/painel-controle']);
      },
      (error) => {
        console.error('Erro na criação do projeto:', error);
      }
    );
  }
}
