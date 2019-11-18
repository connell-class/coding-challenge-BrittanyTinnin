package com.revature.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.model.GroceryItem;
import com.revature.model.GroceryList;
import com.revature.service.GroceryListRepository;

@RestController
@CrossOrigin(origins="*")
public class GroceryListController {
	Set<GroceryItem> list;

	private GroceryListRepository gs;

	@Autowired
	public void setGs(GroceryListRepository gs) {
		this.gs = gs;
	}

//	GET /grocery-lists to find all grocery lists
//	POST /grocery-lists to create a new grocery list @ResponseBody
//	POST /grocery-lists/items to add a new item to a grocery list @ResponseBody
//	DELETE /grocery-lists/items/{itemId} to remove an item from a grocery list
//	DELETE /grocery-lists to delete a grocery list
//	If you need to create additional endpoints you are welcome to

	@GetMapping(value = "/grocery-lists")
	public Iterable<GroceryList> getall() {
		return gs.findAll();
	}

	@PostMapping(value = "/grocery-lists")
	public @ResponseBody GroceryList newlist(@RequestBody GroceryList gl) {
		return gl;
	}

	@DeleteMapping(value = "grocery-lists")
	public @ResponseBody void deleteItem(@RequestBody GroceryList gl) {
		gs.delete(gl);
	}
}
