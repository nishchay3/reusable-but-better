import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-better-bottomsheet',
  templateUrl: './better-bottomsheet.component.html',
  styleUrls: ['./better-bottomsheet.component.scss'],
})
export class BetterBottomsheetComponent implements OnInit {
  constructor(private readonly utilityService: UtilityService) {}

  ngOnInit(): void {
    console.log('Opened');
  }

  closeBs(): void {
    this.utilityService.closeBetterBS();
  }
}
