import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { ComicsComponent } from './pages/comics/comics.component';
import { EventsComponent } from './pages/events/events.component';
import { StoriesComponent } from './pages/stories/stories.component';
import { SeriesComponent } from './pages/series/series.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { CharactersDetailComponent } from './pages/characters-detail/characters-detail.component'
@NgModule({
  declarations: [
    AppComponent,
    ComicsComponent,
    EventsComponent,
    StoriesComponent,
    SeriesComponent,
    CharactersComponent,
    CharactersDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
