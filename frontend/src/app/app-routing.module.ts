import { HomeComponent } from './home/home.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramadorComponent } from './programador/programador.component';
import { NivelComponent } from './nivel/nivel.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'programador', component: ProgramadorComponent},
    {path: 'nivel', component: NivelComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
