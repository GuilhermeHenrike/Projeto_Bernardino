import { RouterModule, Routes } from '@angular/router';
import { AltcancComponent } from './altcanc/altcanc.component';
import { BagagemComponent } from './bagagem/bagagem.component';
import { InformacoesComponent } from './informacoes/informacoes.component';
import { OpcoesMainComponent } from './opcoes-main/opcoes-main.component';
import { AppComponent } from './app.component';
import { CarrosselComponent } from './carrossel/carrossel.component';
import { HomeComponent } from './home/home.component';
import { MossaHistoriaComponent } from './mossa-historia/mossa-historia.component';
import { PoliticaCooksComponent } from './politica-cooks/politica-cooks.component';
import { PoliticaDePrivacidadeComponent } from './politica-de-privacidade/politica-de-privacidade.component';

export const routes: Routes = [
    { path: "opcoes-main", component: OpcoesMainComponent}, 
    { path: "altcanc", component: AltcancComponent},
    { path: "bagagem", component: BagagemComponent},
    { path: "informacoes", component: InformacoesComponent},
    { path: '', component: HomeComponent},
    { path: "historia", component: MossaHistoriaComponent},
    {path: "cooks", component: PoliticaCooksComponent},
    {path: "pprivacidade", component: PoliticaDePrivacidadeComponent},
];
