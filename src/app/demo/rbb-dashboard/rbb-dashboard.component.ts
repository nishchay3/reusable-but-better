import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { componentsList } from 'src/app/shared/namespaces/components-list';

@Component({
  selector: 'app-rbb-dashboard',
  templateUrl: './rbb-dashboard.component.html',
  styleUrls: ['./rbb-dashboard.component.scss'],
})
export class RbbDashboardComponent {
  /**
   * Holds navigation components
   */
  public components = componentsList.components;

  /**
   *  constructor
   * @param router Router
   */
  constructor(private readonly router: Router) {}

  /**
   *  Navigate to selected component's page
   * @param route string
   */
  navigateToComponent(route: string): void {
    this.router.navigate(['/demo' + route]);
  }
}
