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

@NgModule({
  declarations: [
    AppComponent,
    IdCardComponent,
    NavigationComponent,
    SocialMediaComponent,
    BannerComponent,
    ContentComponent,
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
