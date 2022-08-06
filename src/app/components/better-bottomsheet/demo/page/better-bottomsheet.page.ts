import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
import { BottomsheetContentComponent } from '../template/bottomsheet-content.component';

@Component({
  selector: 'page-better-bottomsheet',
  templateUrl: './better-bottomsheet.page.html',
  styleUrls: ['./better-bottomsheet.page.scss'],
})
export class BetterBottomsheetPage implements OnInit {
  constructor(private readonly utilityService: UtilityService) {}

  ngOnInit(): void {}

  openBS(): void {
    this.utilityService.openBetterBS(BottomsheetContentComponent);
  }
}
