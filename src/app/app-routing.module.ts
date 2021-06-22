import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersDetailComponent } from './pages/characters-detail/characters-detail.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { ComicsComponent } from './pages/comics/comics.component';
import { EventsComponent } from './pages/events/events.component';
import { SeriesComponent } from './pages/series/series.component';
import { StoriesComponent } from './pages/stories/stories.component';

const routes: Routes = [
  { path: "", redirectTo: "characters", pathMatch: "full" },
  { path: "characters", component: CharactersComponent },
  { path: "characters/:id", component: CharactersDetailComponent },
  { path: "comics", component: ComicsComponent },
  { path: "events", component: EventsComponent },
  { path: "series", component: SeriesComponent },
  { path: "stories", component: StoriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
