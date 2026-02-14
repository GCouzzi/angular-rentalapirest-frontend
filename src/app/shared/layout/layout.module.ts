import { NgModule } from '@angular/core';
import { Layout } from './layout/layout';
import { Nav } from './nav/nav';
import { Footer } from './footer/footer';
import { LayoutRoutingModule } from './layout-routing-module';
import { PagesModule } from '../../features/pages.module';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [LayoutRoutingModule, PagesModule, CommonModule],
  exports: [Layout, Nav, Footer],
  declarations: [Layout, Nav, Footer],
  providers: [],
})
export class LayoutModule { }
