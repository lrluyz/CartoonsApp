import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartoonRoutingModule } from './cartoon-routing.module';
import { CartoonPageComponent } from './pages/cartoon-page/cartoon-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';


@NgModule({
  declarations: [
    CartoonPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    CartoonRoutingModule
  ]
})
export class CartoonModule { }
