import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule, Routes } from '@angular/router';
import { BetterBottomsheetModule } from 'better-bottomsheet';
import { BetterBottomsheetPage } from './page/better-bottomsheet.page';
import { BottomsheetContentComponent } from './template/bottomsheet-content.component';
/**
 * Holds routes
 */
const routes: Routes = [{ path: '', component: BetterBottomsheetPage }];

@NgModule({
  declarations: [BottomsheetContentComponent, BetterBottomsheetPage],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BetterBottomsheetModule,
    //Material Modules
    MatButtonModule,
    MatTabsModule,
  ],
})
export class BetterBottomsheetDemoModule {}
