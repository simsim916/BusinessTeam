package com.example.demo.repository;

import com.example.demo.entity.ItemOrder;

public interface OrderRepository {

	ItemOrder singleOrder(ItemOrder order);
	
}
