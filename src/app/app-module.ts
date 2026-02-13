import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './features/home/home/home';

import { AuthModule } from './features/auth/auth.module';

@NgModule({
  declarations: [
    App,
    Home,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [
  ],
  bootstrap: [App]
})
export class AppModule {

}
