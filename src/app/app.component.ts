import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { UtilityService } from './services/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private title = 'Reusable Components';

  public isBsComponent: any = false;

  private listOfSubscriptions = new Subscription();

  constructor(private readonly utilityService: UtilityService) {}

  ngOnInit(): void {
    const betterBSSubscription = this.utilityService.betterBS$
      .pipe(
        tap((component) => {
          this.openBsComponent(component);
        })
      )
      .subscribe();
    this.listOfSubscriptions.add(betterBSSubscription);
  }

  openBsComponent(component: any): void {
    this.isBsComponent = component;
  }

  closeBsComponent(): void {
    this.isBsComponent = false;
  }

  ngOnDestroy(): void {
    this.listOfSubscriptions.unsubscribe();
  }
}
