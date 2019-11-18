import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroceryListsComponent } from './list/grocery-lists/grocery-lists.component';
import { AGroceryListComponent } from './list/a-grocery-list/a-grocery-list.component';
import { AGroceryListItemComponent } from './list/a-grocery-list-item/a-grocery-list-item.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GroceryListsComponent,
    AGroceryListComponent,
    AGroceryListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
