package com.example.demo.order.service;

import com.example.demo.order.domain.OrderDTO;
import com.example.demo.order.entity.Itemorder;

public interface OrderService {

	public Itemorder order(OrderDTO dto, String userId);
}
