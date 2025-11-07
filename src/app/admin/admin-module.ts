import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing-module';
import { Layout } from './layout/layout';
import { Cliente } from './components/cliente/cliente';

@NgModule({
  declarations: [
    Layout,
    Cliente
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule {}
