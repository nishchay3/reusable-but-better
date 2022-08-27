import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import { RbbDashboardComponent } from './rbb-dashboard.component';
/**
 * Holds routes
 */
const routes: Routes = [
  {
    path: 'demo',
    children: [
      {
        path: 'bottomsheet',
        loadChildren: () =>
          import('../better-bottomsheet-demo/better-bottomsheet-demo.module').then(
            (m) => m.BetterBottomsheetDemoModule
          ),
      },
    ],
  },
  { path: '', component: RbbDashboardComponent },
];

@NgModule({
  declarations: [RbbDashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    //Material Modules
    MatCardModule,
  ],
})
export class RbbDashboardModule {}
