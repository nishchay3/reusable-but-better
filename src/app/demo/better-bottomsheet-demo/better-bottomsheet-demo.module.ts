import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BetterBottomsheetModule } from 'src/app/components/better-bottomsheet/better-bottomsheet.module';
import { BetterBottomsheetPage } from './page/better-bottomsheet.page';
import { BottomsheetContentComponent } from './template/bottomsheet-content.component';

const routes: Routes = [{ path: '', component: BetterBottomsheetPage }];

@NgModule({
  declarations: [BottomsheetContentComponent, BetterBottomsheetPage],
  imports: [CommonModule, RouterModule.forChild(routes), BetterBottomsheetModule],
})
export class BetterBottomsheetDemoModule {}