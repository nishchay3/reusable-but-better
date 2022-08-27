import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BetterBottomsheetOverlayRef } from './better-bottomsheet-overlay-ref';

@Injectable({
  providedIn: 'root',
})
export class BetterBottomsheetStoreService {
  /**
   * Holds component
   */
  public component!: ComponentType<any>;
  /**
   * Holds data
   */
  public data!: {};
  /**
   * Holds backdropClass
   */
  public backdropClass: string | undefined;
  /**
   * Holds panelClass
   */
  public panelClass: string | undefined;
  /**
   * Holds betterBsOverlayRef
   */
  public betterBsOverlayRef!: BetterBottomsheetOverlayRef;
  /**
   * Holds closeBsSubject
   */
  private closeBsSubject = new Subject<any>();
  /**
   * Holds closeBsSubject observable
   */
  public closeBsSubject$ = this.closeBsSubject.asObservable();
  /**
   * Holds dismissOverlaySubject
   */
  private dismissOverlaySubject = new Subject<void>();
  /**
   * Holds dismissOverlaySubject observable
   */
  public dismissOverlaySubject$ = this.dismissOverlaySubject.asObservable();
  /**
   * Holds afterDismissedSubject
   */
  private afterDismissedSubject = new Subject<any>();
  /**
   * Holds afterDismissedSubject observable
   */
  public afterDismissedSubject$ = this.afterDismissedSubject.asObservable();
  /**
   * Holds afterOpenedSubject
   */
  private afterOpenedSubject = new Subject<void>();
  /**
   * Holds afterOpenedSubject observable
   */
  public afterOpenedSubject$ = this.afterOpenedSubject.asObservable();

  /**
   * Emits close BS
   * @param result any
   */
  public emitCloseBs(result?: any): void {
    this.closeBsSubject.next(result);
  }

  /**
   * Emits after BS dismissed event
   * @param result any
   */
  public emitAfterDismissed(result?: any): void {
    this.afterDismissedSubject.next(result);
  }

  /**
   * Emits after BS opened event
   */
  public emitAfterOpened(): void {
    this.afterOpenedSubject.next();
  }

  /**
   * Emits dismiss overlay event
   */
  public emitDismissOverlay(): void {
    this.dismissOverlaySubject.next();
  }
}
