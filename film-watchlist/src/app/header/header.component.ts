import {
  AfterViewInit,
  Component,
  computed,
  ElementRef,
  inject,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass, NgIf, NgStyle } from '@angular/common';
import { WatchlistService } from '../watchlist.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgClass, NgStyle, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('hamburger') hamburger: ElementRef;
  @ViewChild('navLinks') navLinks: ElementRef;

  watchlistService = inject(WatchlistService);
  //listCoun= signal<number> = 0;

  listCount = this.watchlistService.listItems; //()

  expandHamburger = false;
  ngOnInit(): void {
    console.log('HeaderComponent|listCount: ' + this.listCount);
  }

  ngAfterViewInit(): void {}

  toggleHamburger() {
    this.expandHamburger = !this.expandHamburger;

    // if(this.expandHamburger) {
    //   this.renderer.removeClass(this.hamburgerBig.nativeElement, 'is-active');
    // } else {
    //   this.renderer.addClass(this.hamburgerBig.nativeElement, 'is-active');
    // }
    //
    // console.log(this.navLinks.nativeElement.classList)
    // this.navLinks.nativeElement.classList.toggle('open');
    // console.log(this.navLinks.nativeElement.classList)

    // const navLinks = document.querySelector('.nav-links');
    // console.log(navLinks)
    // if(!!navLinks) {
    //   navLinks.classList.toggle('open');
    // }
  }
}
