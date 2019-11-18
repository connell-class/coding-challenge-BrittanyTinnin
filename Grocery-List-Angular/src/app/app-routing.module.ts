import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GroceryListsComponent } from "./list/grocery-lists/grocery-lists.component";
import { AGroceryListComponent } from './list/a-grocery-list/a-grocery-list.component';

const routes: Routes = [
  { path: "viewall", component: GroceryListsComponent },
  { path: "alist", component: AGroceryListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
