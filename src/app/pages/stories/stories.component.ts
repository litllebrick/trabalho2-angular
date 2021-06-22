import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/pages.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  constructor(private service: PagesService) { }
  data
  ngOnInit(): void {
    this.service.getStories().subscribe((res) => {
      console.log(res)
      this.data = res.data.results
    })
  }
}
