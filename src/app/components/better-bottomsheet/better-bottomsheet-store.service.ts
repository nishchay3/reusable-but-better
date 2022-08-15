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

  private closeBsSubject = new Subject<any>();
  public closeBsSubject$ = this.closeBsSubject.asObservable();

  private dismissOverlaySubject = new Subject<void>();
  public dismissOverlaySubject$ = this.dismissOverlaySubject.asObservable();

  private afterDismissedSubject = new Subject<any>();
  public afterDismissedSubject$ = this.afterDismissedSubject.asObservable();

  private afterOpenedSubject = new Subject<void>();
  public afterOpenedSubject$ = this.afterOpenedSubject.asObservable();

  constructor() {}

  public emitCloseBs(result?: any): void {
    this.closeBsSubject.next(result);
  }

  public emitAfterDismissed(result?: any): void {
    this.afterDismissedSubject.next(result);
  }

  public emitAfterOpened(): void {
    this.afterOpenedSubject.next();
  }

  public emitDismissOverlay(): void {
    this.dismissOverlaySubject.next();
  }
}
