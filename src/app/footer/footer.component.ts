import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
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
