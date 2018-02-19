import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';

const appRoutes: Routes = [
  { path: '', component: ResumeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ResumeComponent,
    ProjectsComponent
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
