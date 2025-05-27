import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViaCepComponent } from './viacep/viacep.component';

const routes: Routes = [
  { path: '', component: ViaCepComponent },
  { path: '', redirectTo: '/viacep', pathMatch: 'full' }, //rota padrão
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
