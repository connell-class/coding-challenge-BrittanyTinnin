package com.revature.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.model.GroceryItem;
import com.revature.model.GroceryList;
import com.revature.service.GroceryItemRepository;

@RestController
@RequestMapping(value="grocery-lists")
@CrossOrigin(origins="*")
public class GroceryItemController {
	
//	GET /grocery-lists to find all grocery lists
//	POST /grocery-lists to create a new grocery list
//	POST /grocery-lists/items to add a new item to a grocery list
//	DELETE /grocery-lists/items/{itemId} to remove an item from a grocery list
//	DELETE /grocery-lists to delete a grocery list
//	If you need to create additional enpoints you are welcome to
	
	private GroceryItemRepository gi;

	
	@Autowired
	public void setGi(GroceryItemRepository gi) {
		this.gi = gi;
	}

	@GetMapping(value="items")
//	public @ResponseBody void addItem(@RequestBody GroceryItem item) {
	public @ResponseBody void addItem(GroceryItem item) {
//		GroceryItem ngi = new GroceryItem(0, item.getType(), item.getName(), item.getQuantity(), glist);
		GroceryItem ngi = new GroceryItem(0, "food", "apples", 10, new GroceryList());
		
		gi.save(ngi);
	}
	
	@DeleteMapping(value="items/{itemId}")
	public void deleteItem(@PathVariable int itemId) {
		gi.deleteById(itemId);
	}
	
}
