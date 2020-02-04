// modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// componentes
import { AppComponent } from './app.component';
import { LoginEmpresaComponent } from './website/views/login-empresa/login-empresa.component';
import { LoginUsuarioComponent } from './website/views/login-usuario/login-usuario.component';
import { RegisterUsuarioComponent } from './website/views/register-usuario/register-usuario.component';
import { RegisterEmpresaComponent } from './website/views/register-empresa/register-empresa.component';
import { DashboardEmpresaOfertaComponent } from './cms/components/dashboard-empresa-oferta/dashboard-empresa-oferta.component';
import { DashboardUsuarioComponent } from './cms/components/dashboard-usuario/dashboard-usuario.component';
import { PerfilUsuarioComponent } from './cms/components/perfil-usuario/perfil-usuario.component';
import { PerfilEmpresaComponent } from './cms/components/perfil-empresa/perfil-empresa.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FilterFormComponent } from './website/shared/filter-form/filter-form.component';
import { FooterComponent } from './website/shared/footer/footer.component';
import { HeaderComponent } from './website/shared/header/header.component';
import { OfertasPopularidadComponent } from './website/views/ofertas-popularidad/ofertas-popularidad.component';
import { PredefinedQueryComponent } from './website/views/predefined-query/predefined-query.component';
import { PredefinedQueryListComponent } from './website/views/predefined-query-list/predefined-query-list.component';
import { SearchComponent } from './website/shared/search/search.component';
import { HomeComponent } from './website/views/home/home.component';
import { DashboardEmpresaSolicitudComponent } from './cms/components/dashboard-empresa-solicitud/dashboard-empresa-solicitud.component';
import { OfertasCiudadComponent } from './website/views/ofertas-ciudad/ofertas-ciudad.component';
import { OfertasCiudadesComponent } from './website/views/ofertas-ciudades/ofertas-ciudades.component';
import { OfertasAnuncioComponent } from './website/views/ofertas-anuncio/ofertas-anuncio.component';
import { OfertasPuestoComponent } from './website/views/ofertas-puesto/ofertas-puesto.component';
import { OfertasComponent } from './website/views/ofertas/ofertas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginEmpresaComponent,
    LoginUsuarioComponent,
    RegisterUsuarioComponent,
    RegisterEmpresaComponent,
    DashboardEmpresaOfertaComponent,
    DashboardUsuarioComponent,
    PerfilUsuarioComponent,
    PerfilEmpresaComponent,
    ErrorPageComponent,
    FilterFormComponent,
    FooterComponent,
    HeaderComponent,
    OfertasPopularidadComponent,
    PredefinedQueryComponent,
    PredefinedQueryListComponent,
    SearchComponent,
    HomeComponent,
    DashboardEmpresaSolicitudComponent,
    OfertasCiudadComponent,
    OfertasCiudadesComponent,
    OfertasAnuncioComponent,
    OfertasPuestoComponent,
    OfertasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
