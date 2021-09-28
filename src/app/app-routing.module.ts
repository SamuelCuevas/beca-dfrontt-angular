import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './components/base/base.component';
import { ContentHomeComponent } from './components/content-home/content-home.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { ImgWelcomeComponent } from './components/img-welcome/img-welcome.component';
import { MenuContentComponent } from './components/menu-content/menu-content.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'base', component: BaseComponent, children:[
    { path: '', component: ImgWelcomeComponent },
    { path: 'content', component: MenuContentComponent, children: [
      { path: '', component: ContentHomeComponent },
      { path: 'forms', component: FormComponent },
    ] },
    
  ] },
  { path: '', redirectTo: 'base', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
