import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/template/main/main.component';
import { PainelControleComponent } from './components/template/painel-controle/painel-controle.component';

const routes: Routes = [
  {
    path: "",
    component: BodyComponent
  },
  {
    path: "painel-controle",
    component:PainelControleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
