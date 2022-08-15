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
  @ViewChild('overlayRef')
  private overlayRef!: ElementRef;

  @ViewChild('bsScrollSnapFullRef')
  private bsScrollSnapFullRef!: ElementRef;

  @ViewChild('bsContainerRef')
  private bsContainerRef!: ElementRef;

  private overlayRefNativeElem!: Element;

  private observerRef!: IntersectionObserver;

  public componentPortal!: ComponentPortal<any>;

  public backdropClass: string | undefined;

  public panelClass: string | undefined;

  constructor(
    private readonly betterBsStoreService: BetterBottomsheetStoreService,
    private readonly injector: Injector
  ) {}

  ngOnInit(): void {
    const component = this.betterBsStoreService.component;
    const componentInjector = this.createComponentInjector();
    this.backdropClass = this.betterBsStoreService.backdropClass;
    this.panelClass = this.betterBsStoreService.panelClass;

    this.componentPortal = new ComponentPortal(component, null, componentInjector);

    this.listenToSubjectEvents();
  }

  ngAfterViewInit(): void {
    this.overlayRefNativeElem = this.overlayRef?.nativeElement;
    this.openBs();
    setTimeout(this.listenToIntersectionChanged.bind(this), 500);
    this.betterBsStoreService.emitAfterOpened();
  }

  ngOnDestroy(): void {
    this.observerRef?.disconnect();
    this.betterBsStoreService.emitAfterDismissed();
  }

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

  private listenToSubjectEvents(): void {
    this.betterBsStoreService.closeBsSubject$
      .pipe(
        take(1),
        tap(() => {
          this.dismissBs();
        })
      )
      .subscribe();
  }

  private listenToIntersectionChanged(): void {
    this.observerRef = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        if (!entries?.[0]?.isIntersecting) this.dismissOverlay();
      },
      { threshold: 0 }
    );
    this.observerRef?.observe(this.bsContainerRef?.nativeElement);
  }

  private openBs(): void {
    this.overlayRefNativeElem?.scroll({
      top: this.bsScrollSnapFullRef?.nativeElement?.clientHeight,
      behavior: 'smooth',
    });
  }

  public dismissBs(): void {
    this.overlayRefNativeElem?.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }

  private dismissOverlay(): void {
    this.betterBsStoreService.emitDismissOverlay();
  }
}
