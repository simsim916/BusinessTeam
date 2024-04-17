package com.example.demo.service;

import java.util.List;

import com.example.demo.domain.OrderDTO;
import com.example.demo.entity.Itemorder;
import com.example.demo.entity.OrderDetail;

public interface OrderService {

	public Itemorder order(OrderDTO dto, String userId);
}
