import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ComponentsModule } from './shared/components/components.module';
import { Automoveis } from './shared/layout/automoveis/automoveis';
import { AutomoveisSideBar } from './shared/layout/automoveis-side-bar/automoveis-side-bar';
import { Alugueis } from './shared/layout/alugueis/alugueis';
import { AlugueisSideBar } from './shared/layout/alugueis-side-bar/alugueis-side-bar';


@NgModule({
  declarations: [
    App,
    Automoveis,
    AutomoveisSideBar,
    Alugueis,
    AlugueisSideBar,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
  ],
  providers: [
  ],
  bootstrap: [App]
})
export class AppModule {

}
