import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/pages.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  constructor(private service: PagesService) { }
  data
  ngOnInit(): void {
    this.service.getStories().subscribe((res) => {
      console.log(res)
      this.data = res.data.results
    })
  }
}
