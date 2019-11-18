import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-grocery-list',
  templateUrl: './a-grocery-list.component.html',
  styleUrls: ['./a-grocery-list.component.scss']
})
export class AGroceryListComponent implements OnInit {

  list: any = JSON.parse(localStorage.getItem("list"))
  

  constructor() { }

  ngOnInit() {
    console.log(this.list.groceryItems)
  }

  aSpecificList(){}

}
