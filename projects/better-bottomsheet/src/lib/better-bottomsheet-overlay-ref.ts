import { OverlayRef } from '@angular/cdk/overlay';
import { Observable, tap } from 'rxjs';
import { BetterBottomsheetStoreService } from './better-bottomsheet-store.service';

export class BetterBottomsheetOverlayRef {
  /**
   * constructor
   * @param overlayRef OverlayRef
   * @param betterBsStoreService BetterBottomsheetStoreService
   */
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

  /**
   * Dismiss Better Bottom Sheet
   * @param result any
   */
  public dismiss(result?: any): void {
    this.betterBsStoreService.emitCloseBs(result);
  }

  /**
   * Get afterDismissed observable
   * @returns Observable<void>
   */
  public afterDismissed(): Observable<void> {
    return this.betterBsStoreService.afterDismissedSubject$;
  }

  /**
   * Get afterOpened observable
   * @returns Observable<void>
   */
  public afterOpened(): Observable<void> {
    return this.betterBsStoreService.afterOpenedSubject$;
  }
}
