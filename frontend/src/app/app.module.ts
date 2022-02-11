import { ProgramadorModule } from './programador/programador.module';
import { ProgramadorRoutingModule } from './programador/programador-routing.module';
import { NivelModule } from './nivel/nivel.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProgramadorComponent } from './programador/programador.component';
import { NivelComponent } from './nivel/nivel.component';
import { ComponentsComponent } from './components/components.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { NivelRoutingModule } from './nivel/nivel-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProgramadorComponent,
    NivelComponent,
    ComponentsComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NivelModule,
    ProgramadorModule,
    HttpClientModule,
    NivelRoutingModule,
    ProgramadorRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
