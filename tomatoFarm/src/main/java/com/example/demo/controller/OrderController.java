package com.example.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.OrderDTO;
import com.example.demo.entity.ItemOrder;
import com.example.demo.entity.OrderDetail;
import com.example.demo.entity.UserAddress;
import com.example.demo.module.OrderRequest;
import com.example.demo.service.OrderService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/order")
@AllArgsConstructor
public class OrderController {

	OrderService orderService;
	
	@PostMapping("/order")
	public ItemOrder test(@RequestBody List<OrderDTO> list) {
		OrderRequest orderRequest = new OrderRequest();
		for(OrderDTO dto : list) {
			System.out.println(dto);
		}
		
		List<OrderDetail> detailList = orderRequest.makeDetailEntity(list);
		ItemOrder order = orderRequest.makeOrderEntity(list);
		order = orderService.order(order,detailList);
		
		return order;
	}
	
}
