import { RouterModule, Routes } from '@angular/router';
import { AltcancComponent } from './altcanc/altcanc.component';
import { BagagemComponent } from './bagagem/bagagem.component';
import { InformacoesComponent } from './informacoes/informacoes.component';
import { OpcoesMainComponent } from './opcoes-main/opcoes-main.component';

export const routes: Routes = [
    { path: "opcoes-main", component: OpcoesMainComponent}, 
    { path: "altcanc", component: AltcancComponent},
    { path: "bagagem", component: BagagemComponent},
    { path: "informacoes", component: InformacoesComponent}
];
