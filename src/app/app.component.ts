import { Component, HostListener, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Clark Brading | Portfolio';

  width$: number;
  backToTopClasses$: string;

  updateClasses() {
    if (this.width$ < 480) {
      this.backToTopClasses$ = 'compact';
    } else {
      this.backToTopClasses$ = '';
    }
  }


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width$ = event.target.innerWidth;
    this.updateClasses();
  }

  ngOnInit() {
    this.width$ = window.innerWidth;
    this.updateClasses();
  }

}
