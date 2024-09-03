import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ResumeComponent } from './resume/resume.component';
import { SkillsComponent } from './skills/skills.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
  },
  {
    path: 'About-me',
    component: AboutMeComponent
  },
  {
    path: 'Contact',
    component: ContactComponent
  },
  {
    path: 'Home',
    component: HomepageComponent
  },
  {
    path: 'Skills',
    component: SkillsComponent
  },
  {
    path: 'Resume',
    component: ResumeComponent
  },
  {
    path: 'Portfolio',
    component: PortfolioComponent
  }
];
