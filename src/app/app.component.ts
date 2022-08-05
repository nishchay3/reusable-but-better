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

  public isBSOpen = false;

  private listOfSubscriptions = new Subscription();

  constructor(private readonly utilityService: UtilityService) {}

  ngOnInit(): void {
    const betterBSSubscription = this.utilityService.betterBS$
      .pipe(
        tap((isBSOpen) => {
          console.log(isBSOpen);
          this.isBSOpen = isBSOpen;
        })
      )
      .subscribe();
    this.listOfSubscriptions.add(betterBSSubscription);
  }

  ngOnDestroy(): void {
    this.listOfSubscriptions.unsubscribe();
  }
}
