import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelCreditoComponent } from './components/template/painel-credito/painel-credito.component';
import { PainelControleComponent } from './components/template/painel-controle/painel-controle.component';
import { CadastroComponent } from './components/template/cadastro/cadastro.component';
import { LoginComponent } from './components/template/login/login.component';
import { InicioComponent } from './components/template/inicio/inicio.component';
import { CriarProjetoComponent } from './components/template/criar-projeto/criar-projeto.component';
import { DeletarProjetoComponent } from './components/template/deletar-projeto/deletar-projeto.component';
import { AuthGuard } from './services/auth-guard-service';

const routes: Routes = [
  {
    path: 'cadastro',
    component: CadastroComponent,
  },
  {
    path: 'painel-credito',
    component: PainelCreditoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'painel-controle',
    component: PainelControleComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: InicioComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'criar-projeto',
    component: CriarProjetoComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'deletar-projeto',
    component: DeletarProjetoComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
