import { Component } from '@angular/core';
import { PagesService } from './pages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private service: PagesService) { }

}
