package com.example.demo.serviceImpl;

import org.springframework.stereotype.Service;

import com.example.demo.entity.ItemOrder;
import com.example.demo.repository.OrderRepository;
import com.example.demo.service.OrderService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class OrderServiceImpl implements OrderService{

	private final OrderRepository orderRepository;
	
	@Override
	public ItemOrder singleOrder(ItemOrder order) {
		return orderRepository.singleOrder(order);
	}
}
