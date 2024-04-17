package com.example.demo.service;

import com.example.demo.domain.OrderDTO;
import com.example.demo.entity.Itemorder;

public interface OrderService {

	public Itemorder order(OrderDTO dto, String userId);
}
