import { Component, OnInit } from '@angular/core';
import { BetterBottomsheetService } from 'better-bottomsheet';
import { BottomsheetContentComponent } from '../template/bottomsheet-content.component';

@Component({
  selector: 'page-better-bottomsheet',
  templateUrl: './better-bottomsheet.page.html',
  styleUrls: ['./better-bottomsheet.page.scss'],
})
export class BetterBottomsheetPage implements OnInit {
  /**
   * constructor
   * @param betterBottomsheetService BetterBottomsheetService
   */
  constructor(private readonly betterBottomsheetService: BetterBottomsheetService) {}

  /**
   * On init
   */
  ngOnInit(): void {}

  /**
   * Open Bottom Sheet
   */
  openBetterBs(): void {
    const bsRef = this.betterBottomsheetService.open(BottomsheetContentComponent);
  }
}
