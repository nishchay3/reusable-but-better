import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, ComponentType } from '@angular/cdk/portal';
import { ComponentRef, Injectable } from '@angular/core';
import { BetterBottomsheetOverlayRef } from './better-bottomsheet-overlay-ref';
import { BetterBottomsheetStoreService } from './better-bottomsheet-store.service';
import { BetterBottomsheetComponent } from './better-bottomsheet.component';

/**
 * Interface for Better Bottom Sheet config
 */
interface BetterBottomsheetConfigIntF {
  panelClass?: string;
  backdropClass?: string;
  data?: {};
}

@Injectable({
  providedIn: 'root',
})
export class BetterBottomsheetService {
  /**
   * Holds overlayRef
   */
  private overlayRef!: OverlayRef;
  /**
   * Holds Better Bottom sheet component instance
   */
  public containerInstance!: BetterBottomsheetComponent;

  /**
   * constructor
   * @param overlay Overlay
   * @param betterBsStoreService BetterBottomsheetStoreService
   */
  constructor(
    private readonly overlay: Overlay,
    private readonly betterBsStoreService: BetterBottomsheetStoreService
  ) {}

  /**
   * Opens Better Bottom Sheet
   * @param component ComponentType<any>
   * @param config BetterBottomsheetConfigIntF
   * @returns BetterBottomsheetOverlayRef
   */
  public open(
    component: ComponentType<any>,
    config: BetterBottomsheetConfigIntF = {}
  ): BetterBottomsheetOverlayRef {
    //Initialize component data
    this.betterBsStoreService.component = component;
    config.data
      ? (this.betterBsStoreService.data = config.data)
      : (this.betterBsStoreService.data = {});
    this.betterBsStoreService.backdropClass = config?.backdropClass;
    this.betterBsStoreService.panelClass = config?.panelClass;
    //Create Overlay
    this.createOverlay();
    // Instantiate remote control
    const betterBsOverlayRef = new BetterBottomsheetOverlayRef(
      this.overlayRef,
      this.betterBsStoreService
    );
    this.betterBsStoreService.betterBsOverlayRef = betterBsOverlayRef;
    //Create and attach component
    this.containerInstance = this.attachBsComponent();

    return betterBsOverlayRef;
  }

  /**
   * Create overlay
   * @param bsConfig BetterBottomsheetConfigIntF
   */
  private createOverlay(): void {
    const overlayConfig = this.getOverlayConfig();
    this.overlayRef = this.overlay.create(overlayConfig);
  }

  /**
   * Get overlay config
   * @param bsConfig BetterBottomsheetConfigIntF
   * @returns OverlayConfig
   */
  private getOverlayConfig(): OverlayConfig {
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();
    const overlayConfig = new OverlayConfig({
      width: '100%',
      height: '100%',
      hasBackdrop: false,
      disposeOnNavigation: true,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });
    return overlayConfig;
  }

  /**
   * Attach BS component
   * @returns BetterBottomsheetComponent
   */
  private attachBsComponent(): BetterBottomsheetComponent {
    const betterBottomsheetPortal = new ComponentPortal(BetterBottomsheetComponent);
    const componentRef: ComponentRef<BetterBottomsheetComponent> =
      this.overlayRef.attach(betterBottomsheetPortal);
    return componentRef.instance;
  }

  /**
   * Dismiss Better Bottom Sheet
   * @param result any
   */
  public dismiss(result?: any): void {
    this.betterBsStoreService.emitCloseBs(result);
  }
}
