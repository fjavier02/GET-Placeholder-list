import { Component, OnInit } from '@angular/core';
import { ListUsers } from '../placeholder.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: any = [];


  constructor(private lista: ListUsers) {
    lista.listServ().subscribe(users => {this.users = users});
    console.log(this.users)
  }

  ngOnInit(): void {
  }

}
