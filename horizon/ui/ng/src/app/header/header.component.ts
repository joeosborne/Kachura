import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'horizon-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  showingMobileMenu: boolean | undefined;
  constructor() {}

  ngOnInit(): void {}
  navToggle() {
    this.showingMobileMenu = !this.showingMobileMenu;
  }
}
