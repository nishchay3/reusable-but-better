import { ComponentPortal } from '@angular/cdk/portal';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-better-bottomsheet',
  templateUrl: './better-bottomsheet.component.html',
  styleUrls: ['./better-bottomsheet.component.scss'],
})
export class BetterBottomsheetComponent implements AfterViewInit, OnChanges, OnDestroy {
  @ViewChild('overlayRef')
  private overlayRef!: ElementRef;

  @ViewChild('bsIntersectionRef')
  private bsIntersectionRef!: ElementRef;

  private overlayRefNativeElem!: Element;

  private observerRef!: IntersectionObserver;

  @Output() private bsClosedEvent: EventEmitter<void> = new EventEmitter();

  @Input() public component: any;

  public componentPortal!: ComponentPortal<any>;

  constructor() {}

  ngOnChanges(): void {
    //Todo add simpleChanges
    if (this.component) this.componentPortal = new ComponentPortal(this.component);
  }

  ngAfterViewInit(): void {
    this.overlayRefNativeElem = this.overlayRef?.nativeElement;
    this.openBs();
    setTimeout(this.listenToIntersectionChanged.bind(this), 1000);
  }

  ngOnDestroy(): void {
    this.observerRef?.disconnect();
  }

  listenToIntersectionChanged(): void {
    this.observerRef = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        if (entries?.[0]?.isIntersecting) this.emitBsClosedEvent();
      },
      { threshold: 0.7 }
    );
    this.observerRef?.observe(this.bsIntersectionRef?.nativeElement);
  }

  openBs(): void {
    this.overlayRefNativeElem?.scroll({
      top: 500,
      behavior: 'smooth',
    });
  }

  dismissBs(): void {
    this.overlayRefNativeElem?.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }

  emitBsClosedEvent(): void {
    this.bsClosedEvent.emit();
  }
}
