import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/pages.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  constructor(private service: PagesService) { }
  data
  ngOnInit(): void {
    this.service.getComics().subscribe((res: any) => {
      console.log(res)
      this.data = res.data.results
    })
  }
}
