import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpresaDataService } from 'src/app/services/empresa.data-service';
import { Participante } from 'src/app/models/participante';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  cadastroForm!: FormGroup;

  constructor(private fb: FormBuilder, private empresaDataService: EmpresaDataService) {}

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      usuario: ['', Validators.required],
      cnpj: ['', Validators.required],
      razaoSocial: ['', Validators.required],
      email: ['', [Validators.required]],
      telefone: ['', Validators.required],
      senha: ['', Validators.required],
      confirmarSenha: ['', Validators.required],
    });
  }

  Cadastro(): void {
    if (this.cadastroForm.valid) {
      const participante: Participante = {
        id: 14,
        nome: this.cadastroForm.get('usuario')!.value,
        CNPJ: this.cadastroForm.get('cnpj')!.value,
        razaoSocial: this.cadastroForm.get('razaoSocial')!.value,
        email: this.cadastroForm.get('email')!.value,
        telefone: this.cadastroForm.get('telefone')!.value,
        senha: this.cadastroForm.get('senha')!.value,
        tipo: 'Cliente',
        dataRegistro: new Date('2024-11-20  '),
        empresas: [],
      };

      this.empresaDataService.cadastrar(participante).subscribe(
        (response) => {
          console.log('Cadastro bem-sucedido:', response.Mensagem);
          // Realize ações necessárias após o cadastro bem-sucedido
        },
        (error) => {
          console.error('Erro no cadastro:', error);
          // Trate o erro conforme necessário
        }
      );
    }
  }
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