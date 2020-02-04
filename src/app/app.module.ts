// modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// componentes
import { AppComponent } from './app.component';
import { LoginEmpresaComponent } from './auth/components/login-empresa/login-empresa.component';
import { LoginUsuarioComponent } from './auth/components/login-usuario/login-usuario.component';
import { RegisterUsuarioComponent } from './auth/components/register-usuario/register-usuario.component';
import { RegisterEmpresaComponent } from './auth/components/register-empresa/register-empresa.component';
import { DashboardEmpresaComponent } from './cms/components/dashboard-empresa/dashboard-empresa.component';
import { DashboardUsuarioComponent } from './cms/components/dashboard-usuario/dashboard-usuario.component';
import { PerfilUsuarioComponent } from './cms/components/perfil-usuario/perfil-usuario.component';
import { PerfilEmpresaComponent } from './cms/components/perfil-empresa/perfil-empresa.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FilterFormComponent } from './website/components/filter-form/filter-form.component';
import { FooterComponent } from './website/components/footer/footer.component';
import { HeaderComponent } from './website/components/header/header.component';
import { OfertasComponent } from './website/components/ofertas/ofertas.component';
import { PredefinedQueryComponent } from './website/components/predefined-query/predefined-query.component';
import { PredefinedQueryListComponent } from './website/components/predefined-query-list/predefined-query-list.component';
import { SearchComponent } from './website/components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginEmpresaComponent,
    LoginUsuarioComponent,
    RegisterUsuarioComponent,
    RegisterEmpresaComponent,
    DashboardEmpresaComponent,
    DashboardUsuarioComponent,
    PerfilUsuarioComponent,
    PerfilEmpresaComponent,
    ErrorPageComponent,
    FilterFormComponent,
    FooterComponent,
    HeaderComponent,
    OfertasComponent,
    PredefinedQueryComponent,
    PredefinedQueryListComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
