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
import { HomeContentComponent } from './home-content/home-content.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactContentComponent } from './contact-content/contact-content.component';
import { AboutContentComponent } from './about-content/about-content.component';
import { EsBordersComponent } from './es-borders/es-borders.component';
import { SesraComponent } from './sesra/sesra.component';
import { SpecialProjectsComponent } from './special-projects/special-projects.component';
import { PortfolioOverviewComponent } from './portfolio-overview/portfolio-overview.component';
import { PortfolioOverviewContentComponent } from './portfolio-overview-content/portfolio-overview-content.component';
import { SesraContentComponent } from './sesra-content/sesra-content.component';
import { EsBordersContentComponent } from './es-borders-content/es-borders-content.component';
import { SpecialProjectsContentComponent } from './special-projects-content/special-projects-content.component';

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
    EsBordersComponent,
    SesraComponent,
    SpecialProjectsComponent,
    PortfolioOverviewComponent,
    PortfolioOverviewContentComponent,
    SesraContentComponent,
    EsBordersContentComponent,
    SpecialProjectsContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
