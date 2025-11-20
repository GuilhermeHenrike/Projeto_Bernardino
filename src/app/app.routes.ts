import { RouterModule, Routes } from '@angular/router';
import { AltcancComponent } from './altcanc/altcanc.component';
import { BagagemComponent } from './bagagem/bagagem.component';
import { InformacoesComponent } from './informacoes/informacoes.component';
import { OpcoesMainComponent } from './opcoes-main/opcoes-main.component';
import { AppComponent } from './app.component';
import { CarrosselComponent } from './carrossel/carrossel.component';
import { HomeComponent } from './home/home.component';
import { NossaHistoriaComponent } from './nossa-historia/nossa-historia.component';
import { PoliticaCooksComponent } from './politica-cooks/politica-cooks.component';
import { PoliticaDePrivacidadeComponent } from './politica-de-privacidade/politica-de-privacidade.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { ContatosComponent } from './contatos/contatos.component';
import { PerguntasFrequentesComponent } from './perguntas-frequentes/perguntas-frequentes.component';
import { InformacaoComponent } from './informacao/informacao.component';
import { TelaRegistroComponent } from './tela-registro/tela-registro.component';
import { MviagemComponent } from './mviagem/mviagem.component';


export const routes: Routes = [
    { path: "opcoes-main", component: OpcoesMainComponent}, 
    { path: "altcanc", component: AltcancComponent},
    { path: "bagagem", component: BagagemComponent},
    { path: "informacoes", component: InformacoesComponent},
    { path: "historia", component: NossaHistoriaComponent},
    {path: "cooks", component: PoliticaCooksComponent},
    {path: "pprivacidade", component: PoliticaDePrivacidadeComponent},
    {path:'', redirectTo: "login",pathMatch: 'full'},
    {path:"login", component: LoginComponent},
    {path:"registro", component: TelaRegistroComponent},
    {path: "dashboard", component: DashboardComponent},
    {path: "home", component: HomeComponent},
    { path: 'resultado', component: ResultadoComponent },
    {path: "mviagem", component: MviagemComponent},
    {path: "contatos", component: ContatosComponent},
    {path: "pf", component: PerguntasFrequentesComponent},
    {path: "ic", component: InformacaoComponent}
];
