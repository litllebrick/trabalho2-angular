import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/pages.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  constructor(private service: PagesService) { }
  data: any
  ngOnInit(): void {
    this.service.getCharacters().subscribe((res: any) => {
      console.log(res.data.results)
      this.data = res.data.results
    })
  }

}
