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
import { DashboardEmpresaComponent } from './cms/components/dashboard-empresa/dashboard-empresa.component';
import { DashboardUsuarioComponent } from './cms/components/dashboard-usuario/dashboard-usuario.component';
import { PerfilUsuarioComponent } from './cms/components/perfil-usuario/perfil-usuario.component';
import { PerfilEmpresaComponent } from './cms/components/perfil-empresa/perfil-empresa.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FilterFormComponent } from './website/shared/filter-form/filter-form.component';
import { FooterComponent } from './website/shared/footer/footer.component';
import { HeaderComponent } from './website/shared/header/header.component';
import { OfertasComponent } from './website/views/ofertas/ofertas.component';
import { PredefinedQueryComponent } from './website/views/predefined-query/predefined-query.component';
import { PredefinedQueryListComponent } from './website/views/predefined-query-list/predefined-query-list.component';
import { SearchComponent } from './website/shared/search/search.component';
import { HomeComponent } from './website/views/home/home.component';

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
    HomeComponent,
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
