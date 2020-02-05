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
import { OfertasComponent } from './website/views/ofertas/ofertas.component';
import { PerfilUsuarioComponent } from './cms/components/perfil-usuario/perfil-usuario.component';
import { PerfilEmpresaComponent } from './cms/components/perfil-empresa/perfil-empresa.component';
import { DashboardEmpresaSolicitudComponent } from './cms/components/dashboard-empresa-solicitud/dashboard-empresa-solicitud.component';
import { DashboardEmpresaOfertaComponent } from './cms/components/dashboard-empresa-oferta/dashboard-empresa-oferta.component';
import { DashboardUsuarioComponent } from './cms/components/dashboard-usuario/dashboard-usuario.component';


const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home",  component:HomeComponent },
  {path:"login-empresa", component:LoginEmpresaComponent},
  {path:"login-candidato", component:LoginUsuarioComponent},
  {path:"registro-candidato", component:RegisterUsuarioComponent},
  {path:"registro-empresa", component:RegisterEmpresaComponent},
  {path:"ofertas", component:OfertasComponent},
  {path:"filtro-popularidad", component:OfertasPopularidadComponent},
  {path:"filtro-ciudades", component:OfertasCiudadesComponent},
  {path:"filtro-ciudad", component:OfertasCiudadComponent},
  {path:"filtro-destacados", component:OfertasAnuncioComponent},
  {path:"filtro-puesto-trabajo", component:OfertasPuestoComponent},
  {path:"ver-perfil-candidato", component:PerfilUsuarioComponent},
  {path:"ver-perfil-empresa", component:PerfilEmpresaComponent},
  {path:"administrar-solicitud-empresa", component:DashboardEmpresaSolicitudComponent},
  {path:"administrar-ofertas-empresa", component:DashboardEmpresaOfertaComponent},
  {path:"administrar-solicitud-candidato", component:DashboardUsuarioComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
