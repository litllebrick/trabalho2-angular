import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/pages.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(private service: PagesService) { }
  data
  ngOnInit(): void {
    this.service.getEvents().subscribe((res) => {
      console.log(res)
      this.data = res.data.results
    })
  }
}
