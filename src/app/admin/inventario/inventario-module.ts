import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventarioRoutingModule } from './inventario-routing-module';
import { Categoria } from './components/categoria/categoria';
import { Producto } from './components/producto/producto';

@NgModule({
  declarations: [
    Categoria,
    Producto
  ],
  imports: [
    CommonModule,
    InventarioRoutingModule
  ]
})
export class InventarioModule {}
