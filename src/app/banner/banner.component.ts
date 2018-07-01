import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input() text: string;
  @Input() imageFilename: string;
  @Input() imageQuality: string;

  backgroundStyle$: string;

  constructor() {
  }

  ngOnInit() {
    this.backgroundStyle$ = 'url("../../assets/' + this.imageQuality + '/' + this.imageFilename + '")';
  }

}
