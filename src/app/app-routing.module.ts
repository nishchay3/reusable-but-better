import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'bottomsheet',
    loadChildren: () =>
      import('./components/better-bottomsheet/better-bottomsheet.module').then(
        (m) => m.BetterBottomsheetModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
