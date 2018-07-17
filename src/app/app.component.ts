import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Clark Brading | Portfolio';

  width$: number;
  backToTopClasses$: string;
  isSafariMobile$: boolean;

  @ViewChild('appContainer')
  appContainer: ElementRef;

  // noinspection JSMethodCanBeStatic
  private browserDetection() {
    // Not 100% reliable for detecting browser type. This is a quick solution. A comprehensive solution can be found later.

    let chrome = navigator.userAgent.indexOf('Chrome') > -1;
    const explorer = navigator.userAgent.indexOf('MSIE') > -1;
    const firefox = navigator.userAgent.indexOf('Firefox') > -1;
    let safari = navigator.userAgent.indexOf('Safari') > -1;
    const camino = navigator.userAgent.indexOf('Camino') > -1;
    const opera = navigator.userAgent.toLowerCase().indexOf('op') > -1;
    if ((chrome) && (safari)) {
      safari = false;
    }
    if ((chrome) && (opera)) {
      chrome = false;
    }

    return {
      isChrome: chrome,
      isExplorer: explorer,
      isFirefox: firefox,
      isSafari: safari,
      isCamino: camino,
      isOpera: opera
    };
  }

  private testForSafariMobile() {
    this.isSafariMobile$ = this.testForSafari() && this.testForIOS();
  }

  private testForSafari() {
    return this.browserDetection().isSafari;
  }

// noinspection JSMethodCanBeStatic
  private testForIOS() {
    return navigator.platform === 'iPhone' || navigator.platform === 'iPad' || navigator.platform === 'iPod';
  }

  ngOnInit() {
    this.width$ = window.innerWidth;
    this.updateClasses();
    this.testForSafariMobile();
  }


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

}
