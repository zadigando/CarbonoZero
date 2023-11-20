import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpresaDataService } from 'src/app/services/empresa.data-service';
import { Participante } from 'src/app/models/participante';
import { Empresa } from '../../../models/empresa';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  //novoParticipante: Participante = new Participante();
  //empresaPadrao: Empresa = new Empresa();
  cadastroForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private empresaDataService: EmpresaDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      usuario: [''],
      CNPJ: [''],
      razaoSocial: [''],
      email: [''],
      telefone: [''],
      tipo: [''],
      senha: [''],
    });
  }

  Cadastro(): void {
    const participante: Participante = {
      id: 0,
      nome: this.cadastroForm.get('usuario')!.value,
      CNPJ: this.cadastroForm.get('CNPJ')!.value,
      razaoSocial: this.cadastroForm.get('razaoSocial')!.value,
      email: this.cadastroForm.get('email')!.value,
      telefone: this.cadastroForm.get('telefone')!.value,
      senha: this.cadastroForm.get('senha')!.value,
      tipo: this.cadastroForm.get('tipo')!.value,
      dataRegistro: new Date(Date.now()),
      empresas: [],
      /*id: 0,
      nome: '',
      CNPJ: '',
      razaoSocial: '',
      telefone: '',
      email: '',
      senha: '',
      tipo: '',
      dataRegistro: new Date(),
      empresas: [],*/
    };

    this.empresaDataService.cadastrar(participante).subscribe(
      (response) => {
        console.log('Cadastro bem-sucedido:', response.Mensagem);
        this.router.navigate(['/login']);
        // Realize ações necessárias após o cadastro bem-sucedido
      },
      (error) => {
        console.error('Erro no cadastro:', error);
        // Trate o erro conforme necessário
      }
    );
  }

  //constructor(private empresaDataService: EmpresaDataService) {}

  /*cadastrarEmpresa() {
    const novoParticipante: Participante = {
      id: 0,
      nome: document.getElementsByClassName('insira_usuario_1'),
      CNPJ: document.getElementsByClassName('insira_cnpj'),
      razaoSocial: document.getElementsByClassName('insira_razao_social'),
      email: document.getElementsByClassName('insira_email_cadastro'),
      senha: document.getElementsByClassName('insira_senha_1'),
      telefone: document.getElementsByClassName('insira_telefone_cadastro'),
      tipo: '',
      dataRegistro: new Date(),
      empresas: [],
    };
    /*const usuarioInput = document.getElementById('usuario') as HTMLInputElement;
    const cnpjInput = document.getElementById('cnpj') as HTMLInputElement;
    const razaoSocialInput = document.getElementById(
      'razaosocial'
    ) as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const telefoneInput = document.getElementById(
      'telefone'
    ) as HTMLInputElement;
    const senhaInput = document.getElementById('senha') as HTMLInputElement;
    const dataRegistro = new Date(Date.now());

    if (
      usuarioInput.value !== null &&
      cnpjInput.value !== null &&
      razaoSocialInput.value !== null &&
      emailInput.value !== null &&
      telefoneInput.value !== null &&
      senhaInput.value !== null &&
      dataRegistro !== null
    ) {
      this.novoParticipante.nome = usuarioInput.value;
      this.novoParticipante.CNPJ = cnpjInput.value;
      this.novoParticipante.razaoSocial = razaoSocialInput.value;
      this.novoParticipante.email = emailInput.value;
      this.novoParticipante.telefone = telefoneInput.value;
      this.novoParticipante.senha = senhaInput.value;
      this.novoParticipante.dataRegistro = dataRegistro;
      this.novoParticipante.tipo = '';
    }*/

  /*this.empresaDataService.cadastrar(this.novoParticipante).subscribe(
      (resposta) => {
        console.log('Usuario cadastrado com sucesso!', resposta);
      },
      (erro) => {
        console.error('Erro ao cadastrar usuario:', erro);
      }
    );
  }*/
}

/*export class CadastroComponent {

  constructor(private empresaDataService: EmpresaDataService) { }

  Cadastro() {
    const usuarioInput = document.getElementById("Usuario") as HTMLInputElement;
    const usuarioCNPJ = document.getElementById("CNPJ") as HTMLInputElement;
    const usuarioRazaoSocial = document.getElementById("RazaoSocial") as HTMLInputElement;
    const usuarioEmail = document.getElementById("Email") as HTMLInputElement;
    const usuarioTelefone = document.getElementById("Telefone") as HTMLInputElement;
    const usuarioSenha = document.getElementById("Senha") as HTMLInputElement;
    const participante = new Participante();

    if (usuarioInput.value !== null
      && usuarioCNPJ.value !== null
      && usuarioRazaoSocial.value !== null
      && usuarioEmail.value !== null
      && usuarioTelefone.value !== null
      && usuarioSenha.value !== null) {

      participante.nome = usuarioInput.value;
      participante.CNPJ = usuarioCNPJ.value;
      participante.razaoSocial = usuarioRazaoSocial.value;
      participante.email = usuarioEmail.value;
      participante.telefone = usuarioTelefone.value;
      participante.senha = usuarioSenha.value;

      this.empresaDataService.cadastrar(participante).subscribe(
        resposta => {
          // Lida com a resposta do serviço de login
          console.log('Cadastro bem-sucedido', resposta);
          // Redirecione para a página principal ou faça outras ações necessárias
        },
        erro => {
          console.error('Erro no cadastro', erro);
          // Lida com erros, como exibir uma mensagem ao usuário
        }
      );
    } else {
      console.error("Elemento com ID 'Usuario' não encontrado.");
    }
  }

}
*/
