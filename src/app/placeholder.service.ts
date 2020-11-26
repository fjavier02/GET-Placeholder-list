import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//const PlaceholderUser: string = "https://jsonplaceholder.typicode.com/users"

@Injectable({
  providedIn: 'root'
})

export class ListUsers {

  lista: any = [];

  constructor(private http: HttpClient) { }

  listServ() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
