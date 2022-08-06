import { Component, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  private betterBSSubject: Subject<any> = new Subject<any>();

  public betterBS$ = this.betterBSSubject.asObservable();

  constructor() {}

  public openBetterBS(component: any): void {
    this.betterBSSubject.next(component);
  }

  public closeBetterBS(): void {
    this.betterBSSubject.next(false);
  }
}
