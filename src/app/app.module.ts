import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdCardComponent } from './id-card/id-card.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { BannerComponent } from './banner/banner.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { HomeContentComponent } from './home/home-content/home-content.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactContentComponent } from './contact/contact-content/contact-content.component';
import { AboutContentComponent } from './about/about-content/about-content.component';
import { HttpClientModule } from '@angular/common/http';
import { PortfolioContentComponent } from './portfolio/portfolio-content/portfolio-content.component';

@NgModule({
  declarations: [
    AppComponent,
    IdCardComponent,
    NavigationComponent,
    SocialMediaComponent,
    BannerComponent,
    CopyrightComponent,
    BackToTopComponent,
    HomeContentComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent,
    ContactContentComponent,
    AboutContentComponent,
    PortfolioContentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
