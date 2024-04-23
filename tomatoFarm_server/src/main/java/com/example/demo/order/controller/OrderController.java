package com.example.demo.order.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.order.domain.OrderDTO;
import com.example.demo.order.entity.Itemorder;
import com.example.demo.order.service.OrderService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/order")
@AllArgsConstructor
public class OrderController {

	OrderService orderService;
	
	@PostMapping("/order")
	public ResponseEntity<?> order(@RequestBody OrderDTO dto, HttpServletRequest request, @AuthenticationPrincipal String userId) {
		ResponseEntity<?> result = null;
		Itemorder itemorder = orderService.order(dto, userId);
		if (itemorder!=null)
			result = ResponseEntity.status(HttpStatus.OK).body(itemorder);
		else 
			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("order failed");
				
		return result;
	}
	
	@GetMapping("/selectwhere")
	public ResponseEntity<?> selectWhere(@AuthenticationPrincipal String userId) {
		ResponseEntity<?> result = null;
		List<Itemorder> list = orderService.selectWhere(userId);
		System.out.println(list);
		result = ResponseEntity.status(HttpStatus.OK).body(list);
		return result;
	}
}
