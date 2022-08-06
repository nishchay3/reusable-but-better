import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BetterBottomsheetComponent } from './better-bottomsheet.component';
import { RouterModule, Routes } from '@angular/router';
import { BottomsheetContentComponent } from './demo/template/bottomsheet-content.component';
import { BetterBottomsheetPage } from './demo/page/better-bottomsheet.page';
import { PortalModule } from '@angular/cdk/portal';

const routes: Routes = [{ path: '', component: BetterBottomsheetPage }];

@NgModule({
  declarations: [BetterBottomsheetComponent, BottomsheetContentComponent, BetterBottomsheetPage],
  imports: [CommonModule, RouterModule.forChild(routes), PortalModule],
  exports: [BetterBottomsheetComponent],
})
export class BetterBottomsheetModule {}
