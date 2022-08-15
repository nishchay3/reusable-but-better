import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BetterBottomsheetOverlayRef } from './better-bottomsheet-overlay-ref';

@Injectable({
  providedIn: 'root',
})
export class BetterBottomsheetStoreService {
  public component!: ComponentType<any>;

  public data!: {};

  public backdropClass: string | undefined;

  public panelClass: string | undefined;

  public betterBsOverlayRef!: BetterBottomsheetOverlayRef;

  private closeBsSubject = new Subject<void>();
  public closeBsSubject$ = this.closeBsSubject.asObservable();

  private dismissOverlaySubject = new Subject<void>();
  public dismissOverlaySubject$ = this.dismissOverlaySubject.asObservable();

  private afterDismissedSubject = new Subject<void>();
  public afterDismissedSubject$ = this.afterDismissedSubject.asObservable();

  private afterOpenedSubject = new Subject<void>();
  public afterOpenedSubject$ = this.afterOpenedSubject.asObservable();

  constructor() {}

  public emitCloseBs(): void {
    this.closeBsSubject.next();
  }

  public emitAfterDismissed(): void {
    this.afterDismissedSubject.next();
  }

  public emitAfterOpened(): void {
    this.afterOpenedSubject.next();
  }

  public emitDismissOverlay(): void {
    this.dismissOverlaySubject.next();
  }
}
