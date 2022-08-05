import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BetterBottomsheetModule } from './components/better-bottomsheet/better-bottomsheet.module';
import { UtilityService } from './services/utility.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BetterBottomsheetModule],
  providers: [UtilityService],
  bootstrap: [AppComponent],
})
export class AppModule {}
