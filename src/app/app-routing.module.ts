import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginEmpresaComponent } from './website/views/login-empresa/login-empresa.component';
import { LoginUsuarioComponent } from './website/views/login-usuario/login-usuario.component';
import { HomeComponent } from './website/views/home/home.component';


const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home",  component:HomeComponent },
  {path:"login-empresa", component:LoginEmpresaComponent},
  {path:"login-candidato", component:LoginUsuarioComponent}
  // {path:"usuarios/login", component:LoginComponent},
  // {path:"usuario/registro", component:RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
