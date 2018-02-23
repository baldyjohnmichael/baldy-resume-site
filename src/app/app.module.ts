import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const appRoutes: Routes = [
  { path: '', component: ResumeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent},
  { path: 'portfolio', component: PortfolioComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ResumeComponent,
    ProjectsComponent,
    PortfolioComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
        { enableTracing: true } // <--- debugging purposes only
      ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
