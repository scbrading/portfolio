import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss']
})
export class BackToTopComponent implements OnInit {

  // noinspection JSMethodCanBeStatic
  scrollToTop() {
    // window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    // document.querySelector('div').scrollTo(0, 0);
    // document.body.scrollTop = 0;
    const scrollToTop = window.setInterval(() => {
      const pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 10); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
    console.log('run');
  }

  constructor() {
  }

  ngOnInit() {
  }

}
