import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { CategoryComponent } from './components/category/category.component';
import { FormComponent } from './components/form/form.component';
import { ImgWelcomeComponent } from './components/img-welcome/img-welcome.component';
import { BaseComponent } from './components/base/base.component';
import { ContentComponent } from './components/content/content.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuContentComponent } from './components/menu-content/menu-content.component';
import { ContentHomeComponent } from './components/content-home/content-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    TopBarComponent,
    CategoryComponent,
    FormComponent,
    ImgWelcomeComponent,
    BaseComponent,
    ContentComponent,
    MenuComponent,
    MenuContentComponent,
    ContentHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
