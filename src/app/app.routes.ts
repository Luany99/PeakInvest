import { Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ConsultaComponent } from './pages/consulta/consulta.component';

export const routes: Routes = [
    { path: 'cadastro', component: CadastroComponent },
    { path: 'consulta', component: ConsultaComponent },
    { path: '', redirectTo: 'cadastro', pathMatch: 'full' },
    { path: '**', redirectTo: 'cadastro' } // Adicione esta linha para capturar rotas inválidas
  ];