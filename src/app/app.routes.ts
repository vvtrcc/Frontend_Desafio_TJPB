import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroListComponent } from './components/cadastro-list/cadastro-list';
import { CadastroFormComponent } from './components/cadastro-form/cadastro-form';

const routes: Routes = [
  { path: 'cadastros', component: CadastroListComponent },
  { path: 'add-cadastro', component: CadastroFormComponent },
  { path: '', redirectTo: '/cadastros', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }