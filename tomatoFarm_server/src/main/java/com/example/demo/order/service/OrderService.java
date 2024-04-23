package com.example.demo.order.service;

import java.util.List;

import com.example.demo.order.domain.OrderDTO;
import com.example.demo.order.entity.Itemorder;

public interface OrderService {

	Itemorder order(OrderDTO dto, String userId);
	List<Itemorder> selectWhere(String userId);
	
}
