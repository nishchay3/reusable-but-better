import { Component, OnInit } from '@angular/core';
import { BetterBottomsheetService } from '../../../components/better-bottomsheet/better-bottomsheet.service';
import { BottomsheetContentComponent } from '../template/bottomsheet-content.component';

@Component({
  selector: 'page-better-bottomsheet',
  templateUrl: './better-bottomsheet.page.html',
  styleUrls: ['./better-bottomsheet.page.scss'],
})
export class BetterBottomsheetPage implements OnInit {
  constructor(private readonly betterBottomsheetService: BetterBottomsheetService) {}

  ngOnInit(): void {}

  openBetterBs(): void {
    const bsRef = this.betterBottomsheetService.open(BottomsheetContentComponent);
  }
}
