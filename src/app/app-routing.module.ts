import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'bottomsheet',
    loadChildren: () =>
      import('./demo/better-bottomsheet-demo/better-bottomsheet-demo.module').then(
        (m) => m.BetterBottomsheetDemoModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
