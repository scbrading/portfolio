import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  windowWidth$: number;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth$ = event.target.innerWidth;
  }

  constructor() {
  }

  ngOnInit() {
    this.windowWidth$ = window.innerWidth;
  }

}
