import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {

  public sidebarItems = [
    {label: 'Listar', icon: 'label', url: './list'},
    {label: 'Agregar', icon: 'add', url: './new-cartoon'},
    {label: 'Buscar', icon: 'search', url: './search'},
  ]

}
