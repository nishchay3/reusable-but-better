import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BetterBottomsheetComponent } from './better-bottomsheet.component';
import { BetterBottomsheetService } from './better-bottomsheet.service';

@NgModule({
  declarations: [BetterBottomsheetComponent],
  imports: [CommonModule, PortalModule, OverlayModule],
  providers: [BetterBottomsheetService],
  exports: [BetterBottomsheetComponent],
})
export class BetterBottomsheetModule {}
