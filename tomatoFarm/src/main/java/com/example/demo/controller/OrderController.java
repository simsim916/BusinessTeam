package com.example.demo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Order;

@RestController
@RequestMapping("/order")
public class OrderController {

	public Order test(Order order) {
		
		
		return null;
	}
}
