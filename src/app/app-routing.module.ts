import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginEmpresaComponent } from './website/views/login-empresa/login-empresa.component';
import { LoginUsuarioComponent } from './website/views/login-usuario/login-usuario.component';
import { HomeComponent } from './website/views/home/home.component';
import { RegisterUsuarioComponent } from './website/views/register-usuario/register-usuario.component';
import { RegisterEmpresaComponent } from './website/views/register-empresa/register-empresa.component';
import { OfertasPopularidadComponent } from './website/views/ofertas-popularidad/ofertas-popularidad.component';
import { OfertasCiudadesComponent } from './website/views/ofertas-ciudades/ofertas-ciudades.component';
import { OfertasCiudadComponent } from './website/views/ofertas-ciudad/ofertas-ciudad.component';
import { OfertasAnuncioComponent } from './website/views/ofertas-anuncio/ofertas-anuncio.component';
import { OfertasPuestoComponent } from './website/views/ofertas-puesto/ofertas-puesto.component';


const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home",  component:HomeComponent },
  {path:"login-empresa", component:LoginEmpresaComponent},
  {path:"login-candidato", component:LoginUsuarioComponent},
  {path:"registro-candidato", component:RegisterUsuarioComponent},
  {path:"registro-empresa", component:RegisterEmpresaComponent},
  {path:"filtro-popularidad", component:OfertasPopularidadComponent},
  {path:"filtro-ciudades", component:OfertasCiudadesComponent},
  {path:"filtro-ciudad", component:OfertasCiudadComponent},
  {path:"filtro-destacados", component:OfertasAnuncioComponent},
  {path:"filtro-puesto-trabajo", component:OfertasPuestoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
