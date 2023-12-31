import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { PainelCreditoComponent } from './components/template/painel-credito/painel-credito.component';
import { NgChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PainelControleComponent } from './components/template/painel-controle/painel-controle.component';
import { CadastroComponent } from './components/template/cadastro/cadastro.component';
import { LoginComponent } from './components/template/login/login.component';
import { InicioComponent } from './components/template/inicio/inicio.component';
import { EmpresaDataService } from './services/empresa.data-service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CriarProjetoComponent } from './components/template/criar-projeto/criar-projeto.component';
import { DeletarProjetoComponent } from './components/template/deletar-projeto/deletar-projeto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PainelCreditoComponent,
    PainelControleComponent,
    CadastroComponent,
    LoginComponent,
    InicioComponent,
    CriarProjetoComponent,
    DeletarProjetoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    NgChartsModule,
    NgApexchartsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
