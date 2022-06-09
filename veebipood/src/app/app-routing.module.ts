import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvalehtComponent } from './avaleht/avaleht.component';
import { KodulehtComponent } from './koduleht/koduleht.component';
import { LisaToodeComponent } from './lisa-toode/lisa-toode.component';
import { OstukorvComponent } from './ostukorv/ostukorv.component';
import { PoedComponent } from './poed/poed.component';

const routes: Routes = [
  // localhost:4200/--> avaleht/ avaleht.component.html
  {path: "soendus", component:AvalehtComponent },
  // localhost:4200/ostukorv --> ostukorv/ostukorv.component.html
 {path: "poed", component: PoedComponent },
 {path: "", component: KodulehtComponent },
 {path: "lisa-toode", component: LisaToodeComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
