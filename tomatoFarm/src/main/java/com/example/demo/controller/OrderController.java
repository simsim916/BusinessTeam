package com.example.demo.controller;

import java.util.List;
import java.util.Random;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.OrderDTO;
import com.example.demo.entity.Itemorder;
import com.example.demo.entity.OrderDetail;
import com.example.demo.entity.UserAddress;
import com.example.demo.jwtToken.TokenProvider;
import com.example.demo.module.OrderRequest;
import com.example.demo.service.OrderService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/order")
@AllArgsConstructor
public class OrderController {

	OrderService orderService;
	TokenProvider tokenProvider; 
	
	@PostMapping("/order")
	public ResponseEntity<?> order(@RequestBody OrderDTO dto, HttpServletRequest request) {
		ResponseEntity<?> result = null;
		String token = tokenProvider.parseBearerToken(request);
		if (token==null) {
			dto.setId("비회원주문");
		} else {
			String id = tokenProvider.validateAndGetUserId(token);
			dto.setId(id);
		}
		Itemorder itemorder = orderService.order(dto);
		if (itemorder!=null)
			result = ResponseEntity.status(HttpStatus.OK).body(itemorder);
		else 
			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("order failed");
				
		return result;
	}
	
}
