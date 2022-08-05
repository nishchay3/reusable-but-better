import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  private betterBSSubject: Subject<boolean> = new Subject<boolean>();

  public betterBS$ = this.betterBSSubject.asObservable();

  constructor() {}

  public openBetterBS(): void {
    this.betterBSSubject.next(true);
  }

  public closeBetterBS(): void {
    this.betterBSSubject.next(false);
  }
}
