import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IdCardComponent } from './id-card/id-card.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { BannerComponent } from './banner/banner.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IdCardComponent,
    NavigationComponent,
    SocialMediaComponent,
    BannerComponent,
    ContentComponent,
    FooterComponent,
    CopyrightComponent,
    BackToTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
