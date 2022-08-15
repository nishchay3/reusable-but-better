import { OverlayRef } from '@angular/cdk/overlay';
import { Observable, tap } from 'rxjs';
import { BetterBottomsheetStoreService } from './better-bottomsheet-store.service';

export class BetterBottomsheetOverlayRef {
  constructor(
    private readonly overlayRef: OverlayRef,
    private readonly betterBsStoreService: BetterBottomsheetStoreService
  ) {
    this.betterBsStoreService.dismissOverlaySubject$
      .pipe(
        tap(() => {
          this.overlayRef.dispose();
        })
      )
      .subscribe();
  }

  public dismiss(): void {
    this.betterBsStoreService.emitCloseBs();
  }

  public afterDismissed(): Observable<void> {
    return this.betterBsStoreService.afterDismissedSubject$;
  }

  public afterOpened(): Observable<void> {
    return this.betterBsStoreService.afterOpenedSubject$;
  }
}
