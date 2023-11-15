import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/template/main/main.component';
import { PainelControleComponent } from './components/template/painel-controle/painel-controle.component';
import { CadastroComponent } from './components/template/cadastro/cadastro.component';
import { LoginComponent } from './components/template/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'painel-controle',
    component: PainelControleComponent,
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
