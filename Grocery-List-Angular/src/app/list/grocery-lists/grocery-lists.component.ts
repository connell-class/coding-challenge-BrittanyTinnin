import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grocery-lists',
  templateUrl: './grocery-lists.component.html',
  styleUrls: ['./grocery-lists.component.scss']
})
export class GroceryListsComponent implements OnInit {

  lists: any[] = [];

  constructor(private http:HttpClient, private router: Router) { }

  ngOnInit() {
    this.viewAll();
  }

  viewAll(){
    this.http.get("http://localhost:8080/grocery-lists")
    .toPromise()
    .then((r: any[]) =>{
      console.log(r)
      this.lists = r;
    })
    .catch(e => console.log(e))
  }


  onSelect(list: any){
    localStorage.clear();
    localStorage.setItem("list", JSON.stringify(list));
    console.log(localStorage.getItem("list"));
    // this.router.navigate(["/alist"])
    console.log(list);
  }
}
