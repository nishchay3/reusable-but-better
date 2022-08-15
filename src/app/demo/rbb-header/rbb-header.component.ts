import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { componentsList } from 'src/app/shared/namespaces/components-list';

@Component({
  selector: 'app-rbb-header',
  templateUrl: './rbb-header.component.html',
  styleUrls: ['./rbb-header.component.scss'],
})
export class RbbHeaderComponent implements OnInit {
  public components = componentsList.components;

  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  navigateToComponent(route: string): void {
    this.router.navigate(['/demo' + route]);
  }
}
