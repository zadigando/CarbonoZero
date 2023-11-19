import { EmpresaDataService } from 'src/app/services/empresa.data-service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  empresa: any = {};

  constructor(private empresaDataService: EmpresaDataService) {}

  cadastrar() {
    this.empresaDataService.cadastrar(this.empresa).subscribe(
      (data) => {
        alert('Cadastro feito com sucesso');
      },
      (error) => {
        console.error('Erro no cadastro:', error);
        alert('Erro ao cadastrar');
      }
    );
  }

}
