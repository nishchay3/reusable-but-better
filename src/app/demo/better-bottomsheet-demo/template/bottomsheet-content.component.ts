import { Component, Inject, OnInit } from '@angular/core';
import { BetterBottomsheetOverlayRef } from 'src/app/components/better-bottomsheet/better-bottomsheet-overlay-ref';
import { BETTER_BS_DATA } from 'src/app/components/better-bottomsheet/better-bottomsheet-tokens';

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
