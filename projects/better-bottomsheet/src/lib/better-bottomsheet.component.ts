import { ComponentPortal } from '@angular/cdk/portal';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Injector,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { take, tap } from 'rxjs';
import { BetterBottomsheetOverlayRef } from './better-bottomsheet-overlay-ref';
import { BetterBottomsheetStoreService } from './better-bottomsheet-store.service';
import { BETTER_BS_DATA } from './better-bottomsheet-tokens';

@Component({
  selector: 'better-bottomsheet',
  templateUrl: './better-bottomsheet.component.html',
  styleUrls: ['./better-bottomsheet.component.scss'],
})
export class BetterBottomsheetComponent implements AfterViewInit, OnInit, OnDestroy {
  /**
   * Holds overlayRef
   */
  @ViewChild('overlayRef')
  private overlayRef!: ElementRef;
  /**
   * Holds bsScrollSnapFullRef
   */
  @ViewChild('bsScrollSnapFullRef')
  private bsScrollSnapFullRef!: ElementRef;
  /**
   * Holds bsContainerRef
   */
  @ViewChild('bsContainerRef')
  private bsContainerRef!: ElementRef;
  /**
   * Holds overlayRefNativeElem
   */
  private overlayRefNativeElem!: Element;
  /**
   * Holds observerRef
   */
  private observerRef!: IntersectionObserver;
  /**
   * Holds result
   */
  private result: any = undefined;
  /**
   * Holds componentPortal
   */
  public componentPortal!: ComponentPortal<any>;
  /**
   * Holds backdropClass
   */
  public backdropClass: string | undefined;
  /**
   * Holds panelClass
   */
  public panelClass: string | undefined;

  /**
   * constructor
   * @param betterBsStoreService BetterBottomsheetStoreService
   * @param injector Injector
   */
  constructor(
    private readonly betterBsStoreService: BetterBottomsheetStoreService,
    private readonly injector: Injector
  ) {}

  /**
   * On Init
   */
  ngOnInit(): void {
    const component = this.betterBsStoreService.component;
    const componentInjector = this.createComponentInjector();
    this.backdropClass = this.betterBsStoreService.backdropClass;
    this.panelClass = this.betterBsStoreService.panelClass;

    this.componentPortal = new ComponentPortal(component, null, componentInjector);

    this.listenToSubjectEvents();
  }

  /**
   * After View init
   */
  ngAfterViewInit(): void {
    this.overlayRefNativeElem = this.overlayRef?.nativeElement;
    this.openBs();
    setTimeout(this.listenToIntersectionChanged.bind(this), 500);
    this.betterBsStoreService.emitAfterOpened();
  }

  /**
   * On Destroy
   */
  ngOnDestroy(): void {
    this.observerRef?.disconnect();
    this.betterBsStoreService.emitAfterDismissed(this.result);
  }

  /**
   * Creates component injector
   * @returns Injector
   */
  private createComponentInjector(): Injector {
    const componentInjector = Injector.create({
      parent: this.injector,
      providers: [
        {
          provide: BetterBottomsheetOverlayRef,
          useValue: this.betterBsStoreService.betterBsOverlayRef,
        },
        {
          provide: BETTER_BS_DATA,
          useValue: this.betterBsStoreService.data,
        },
      ],
    });
    return componentInjector;
  }
  /**
   * Listen to subject events
   */
  private listenToSubjectEvents(): void {
    this.betterBsStoreService.closeBsSubject$
      .pipe(
        take(1),
        tap((result: any) => {
          if (result) this.result = result;
          this.dismissBs();
        })
      )
      .subscribe();
  }

  /**
   * Listen to intersection changed
   */
  private listenToIntersectionChanged(): void {
    this.observerRef = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        if (!entries?.[0]?.isIntersecting) this.dismissOverlay();
      },
      { threshold: 0 }
    );
    this.observerRef?.observe(this.bsContainerRef?.nativeElement);
  }

  /**
   * Open Better Bottom Sheet
   */
  private openBs(): void {
    this.overlayRefNativeElem?.scroll({
      top: this.bsScrollSnapFullRef?.nativeElement?.clientHeight,
      behavior: 'smooth',
    });
  }

  /**
   * Dismiss Better Bottom Sheet
   */
  public dismissBs(): void {
    this.overlayRefNativeElem?.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }

  /**
   * Emit event to dismiss overlay
   */
  private dismissOverlay(): void {
    this.betterBsStoreService.emitDismissOverlay();
  }
}
