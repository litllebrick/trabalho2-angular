import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://gateway.marvel.com/v1/public/';
  apiKey = '055ad259bb84ab391a09180332ce0570';
  hash = 'c2d9fb5c825f521d7c953d88c4683f50'
  ts = 1

  getCharacters() {
    var url = `${this.baseUrl}characters?ts=${this.ts}&apikey=${this.apiKey}&hash=${this.hash}`
    return this.http.get<any>(url)
  }

  getCharactersById(id) {
    var url = `${this.baseUrl}characters/${id}?ts=${this.ts}&apikey=${this.apiKey}&hash=${this.hash}`
    return this.http.get<any>(url)
  }

  getComics() {
    var url = `${this.baseUrl}comics?ts=${this.ts}&apikey=${this.apiKey}&hash=${this.hash}`
    return this.http.get<any>(url)
  }

  getEvents() {
    var url = `${this.baseUrl}events?ts=${this.ts}&apikey=${this.apiKey}&hash=${this.hash}`
    return this.http.get<any>(url)
  }

  getSeries() {
    var url = `${this.baseUrl}series?ts=${this.ts}&apikey=${this.apiKey}&hash=${this.hash}`
    return this.http.get<any>(url)
  }

  getStories() {
    var url = `${this.baseUrl}stories?ts=${this.ts}&apikey=${this.apiKey}&hash=${this.hash}`
    return this.http.get<any>(url)
  }

}
