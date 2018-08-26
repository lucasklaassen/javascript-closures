import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClosuresComponent } from './closures/closures.component';

const routes: Routes = [
  {
    path: '',
    component: ClosuresComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
