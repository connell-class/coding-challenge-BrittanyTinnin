package com.revature.service;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.revature.model.GroceryItem;

@Repository
public interface GroceryItemRepository extends CrudRepository<GroceryItem, Integer> {

}
