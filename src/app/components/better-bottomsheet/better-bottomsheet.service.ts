import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, ComponentType } from '@angular/cdk/portal';
import { ComponentRef, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BetterBottomsheetOverlayRef } from './better-bottomsheet-overlay-ref';
import { BetterBottomsheetStoreService } from './better-bottomsheet-store.service';
import { BetterBottomsheetComponent } from './better-bottomsheet.component';

interface BetterBottomsheetConfigIntF {
  panelClass?: string;
  backdropClass?: string;
  data?: {};
}

@Injectable({
  providedIn: 'root',
})
export class BetterBottomsheetService {
  private overlayRef!: OverlayRef;

  private DEFAULT_CONFIG: BetterBottomsheetConfigIntF = {
    panelClass: '',
    backdropClass: '',
    data: {},
  };

  public containerInstance!: BetterBottomsheetComponent;

  constructor(
    private readonly overlay: Overlay,
    private readonly betterBsStoreService: BetterBottomsheetStoreService
  ) {}

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
    //Override default configuration
    const bsConfig = { ...this.DEFAULT_CONFIG, ...config };
    //Create Overlay
    this.createOverlay(bsConfig);
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

  private createOverlay(bsConfig: BetterBottomsheetConfigIntF): void {
    const overlayConfig = this.getOverlayConfig(bsConfig);
    this.overlayRef = this.overlay.create(overlayConfig);
  }

  private getOverlayConfig(bsConfig: BetterBottomsheetConfigIntF): OverlayConfig {
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
      positionStrategy,
    });
    return overlayConfig;
  }

  private attachBsComponent(): BetterBottomsheetComponent {
    const betterBottomsheetPortal = new ComponentPortal(BetterBottomsheetComponent);
    const componentRef: ComponentRef<BetterBottomsheetComponent> =
      this.overlayRef.attach(betterBottomsheetPortal);
    return componentRef.instance;
  }

  public dismiss(): void {
    this.betterBsStoreService.emitCloseBs();
  }
}
