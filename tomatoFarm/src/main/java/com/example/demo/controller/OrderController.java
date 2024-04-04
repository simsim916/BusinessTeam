package com.example.demo.controller;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.ItemOrder;
import com.example.demo.entity.OrderDetail;
import com.example.demo.service.OrderService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/order")
@AllArgsConstructor
public class OrderController {

	OrderService orderService;
	
	@PostMapping("/order")
	public ItemOrder test() {
		
		return null;
		
	}
}
