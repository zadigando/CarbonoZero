import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelCreditoComponent } from './components/template/painel-credito/painel-credito.component';
import { PainelControleComponent } from './components/template/painel-controle/painel-controle.component';
import { CadastroComponent } from './components/template/cadastro/cadastro.component';
import { LoginComponent } from './components/template/login/login.component';
import { InicioComponent } from './components/template/inicio/inicio.component';

const routes: Routes = [
  {
    path: "cadastro",
    component: CadastroComponent
  },
  {
    path: "painel-credito",
    component: PainelCreditoComponent
  },
  {
    path: "painel-controle",
    component:PainelControleComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "",
    component: InicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
