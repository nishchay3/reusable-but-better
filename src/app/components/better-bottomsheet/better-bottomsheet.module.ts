import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BetterBottomsheetComponent } from './better-bottomsheet.component';
import { RouterModule, Routes } from '@angular/router';
import { BottomsheetContentComponent } from './demo/template/bottomsheet-content.component';
import { BetterBottomsheetPage } from './demo/page/better-bottomsheet.page';

const routes: Routes = [{ path: '', component: BetterBottomsheetPage }];

@NgModule({
  declarations: [BetterBottomsheetComponent, BottomsheetContentComponent, BetterBottomsheetPage],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [BetterBottomsheetComponent],
})
export class BetterBottomsheetModule {}
