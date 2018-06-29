import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Clark Brading | Portfolio';

  width$: number;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width$ = event.target.innerWidth;
  }

  ngOnInit() {
    this.width$ = window.innerWidth;
  }
}
