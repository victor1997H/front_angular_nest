import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Categoria } from './components/categoria/categoria';
import { Producto } from './components/producto/producto';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'categoria',
        component: Categoria
      },
      {
        path: 'producto',
        component: Producto
      },
      {
        path: '',
        redirectTo: 'categoria',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventarioRoutingModule {}
