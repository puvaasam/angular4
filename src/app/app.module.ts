import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { NgModule  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { Router, RouterModule, Event, NavigationStart } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';

import { routedComponents } from './routing/router-link';



import { AppRoutingModule } from './modules/app.routing.module';
import { AppPipesModule }  from './modules/app.pipes.module';
import { AppSharedModule }  from './modules/app.shared.module';
import { BlogPostFormComponent } from './components/blog/blog-post-form.component';
import { PostComponent } from './components/blog/post.component';
import { CountdownTimerComponent } from './components/example/countdown-timer/countdown-timer.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TitleBarComponent,
    BlogPostFormComponent,
    PostComponent,
    CountdownTimerComponent,
    routedComponents

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppPipesModule,
    AppSharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


