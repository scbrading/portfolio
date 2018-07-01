import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdCardComponent } from './id-card/id-card.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { BannerComponent } from './banner/banner.component';
import { ContentComponent } from './content/content.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { FromIdeaToProdComponent } from './from-idea-to-prod/from-idea-to-prod.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { HomeComponent } from './home/home.component';
import { BannerContainerComponent } from './banner-container/banner-container.component';

@NgModule({
  declarations: [
    AppComponent,
    IdCardComponent,
    NavigationComponent,
    SocialMediaComponent,
    BannerComponent,
    ContentComponent,
    CopyrightComponent,
    BackToTopComponent,
    FromIdeaToProdComponent,
    HomeBannerComponent,
    HomeContentComponent,
    HomeComponent,
    BannerContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
