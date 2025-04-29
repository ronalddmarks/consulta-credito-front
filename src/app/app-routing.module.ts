import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaNfseComponent } from './components/consulta-nfse/consulta-nfse.component';
import { ResultadoListaComponent } from './components/resultado-lista/resultado-lista.component';
import { ResultadoDetalheComponent } from './components/resultado-detalhe/resultado-detalhe.component';
import { ConsultaCreditoComponent } from './components/consulta-credito/consulta-credito.component';


const routes: Routes = [
  { path: '', redirectTo: 'consulta', pathMatch: 'full' },
  { path: 'consulta', component: ConsultaNfseComponent },
  { path: 'resultados/:numeroNfse', component: ResultadoListaComponent },
  { path: 'credito/:numeroCredito', component: ResultadoDetalheComponent },
  { path: '', redirectTo: '/consulta/7891011', pathMatch: 'full' },
  { path: 'consulta-credito', component: ConsultaCreditoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
