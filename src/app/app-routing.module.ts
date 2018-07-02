import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { EsBordersComponent } from './es-borders/es-borders.component';
import { SesraComponent } from './sesra/sesra.component';
import { SpecialProjectsComponent } from './special-projects/special-projects.component';
import { PortfolioOverviewComponent } from './portfolio-overview/portfolio-overview.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, {
    path: 'home', component: HomeComponent
  }, {
    path: 'portfolio', component: PortfolioComponent,
    children: [
      {
        path: '',
        component: PortfolioOverviewComponent
      },
      {
        path: '86borders',
        component: EsBordersComponent
      }, {
        path: 'sesra',
        component: SesraComponent
      }, {
        path: 'special-projects',
        component: SpecialProjectsComponent
      }
    ]
  }, {
    path: 'contact', component: ContactComponent
  }, {
    path: 'about', component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
