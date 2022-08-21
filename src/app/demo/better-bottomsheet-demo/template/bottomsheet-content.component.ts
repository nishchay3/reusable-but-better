import { Component, Inject, OnInit } from '@angular/core';
import { BetterBottomsheetOverlayRef, BETTER_BS_DATA } from 'better-bottomsheet';

@Component({
  selector: 'app-bottomsheet-content',
  templateUrl: './bottomsheet-content.component.html',
  styleUrls: ['./bottomsheet-content.component.scss'],
})
export class BottomsheetContentComponent implements OnInit {
  constructor(
    private readonly betterBottomsheetOverlayRef: BetterBottomsheetOverlayRef,
    @Inject(BETTER_BS_DATA) public data: any
  ) {}

  ngOnInit(): void {}
}
