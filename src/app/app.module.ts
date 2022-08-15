import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BetterBottomsheetModule } from './components/better-bottomsheet/better-bottomsheet.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BetterBottomsheetModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
