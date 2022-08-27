import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/**
 * Hold routes
 */
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./demo/rbb-dashboard/rbb-dashboard.module').then((m) => m.RbbDashboardModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
