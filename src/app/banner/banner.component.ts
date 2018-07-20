import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, OnChanges {
  @Input() text: string;
  @Input() parent: string;

  backgroundStyle$: string;

  routeToAssets$ = '../assets/';
  bannerImages$: object[] = [
    {
      name: 'home',
      quality: '2x',
      type: 'png',
      filename: 'from_idea_to_production_banner'
    },
    {
      name: 'portfolio-overview',
      quality: '2x',
      type: 'png',
      filename: 'tools_and_companies_banner'
    },
    {
      name: 'es-borders',
      quality: '2x',
      type: 'png',
      filename: '86borders_banner'
    },
    {
      name: 'sesra',
      quality: '2x',
      type: 'png',
      filename: 'sesra_banner'
    },
    {
      name: 'special-projects',
      quality: '2x',
      type: 'png',
      filename: 'special_projects_banner'
    },
    {
      name: 'contact',
      quality: '2x',
      type: 'png',
      filename: 'ideas_spring_out_of_head_banner'
    },
    {
      name: 'about',
      quality: '2x',
      type: 'jpg',
      filename: 'atl_falcon_at_stadium_banner-80'
    }];

  bannerImageUrls$: object[] = [{}];

  constructBannerImageUrls(collectionArray) {
    for (let i = 0; i < collectionArray.length; i++) {
      const temporaryObject = {url: '', active: false};

      temporaryObject.url = this.routeToAssets$ + collectionArray[i].quality + '/' + collectionArray[i].filename + '.' + collectionArray[i].type;

      if (collectionArray[i].name === this.parent) {
        temporaryObject.active = true;
        this.backgroundStyle$ = 'url(' + temporaryObject.url + ')';
      }
      this.bannerImageUrls$[i] = temporaryObject;
    }
  }

  constructor() {
  }

  ngOnChanges() {
    this.constructBannerImageUrls(this.bannerImages$);
  }

  ngOnInit() {
    this.constructBannerImageUrls(this.bannerImages$);
  }

}
