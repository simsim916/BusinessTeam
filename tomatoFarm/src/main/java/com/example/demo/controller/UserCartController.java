package com.example.demo.controller;

import javax.transaction.Transactional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.UserCart;
import com.example.demo.entity.UserCartID;
import com.example.demo.service.UserCartService;

@RestController
@RequestMapping("/usercart")
public class UserCartController {

	UserCartService userCartService;
	
	
	@Transactional
	@GetMapping("/update")
	public UserCart update(UserCart userCart) {
		ResponseEntity<?> result = null;
		UserCart cart = UserCart.builder()
				.item_code(5000008)
				.id("manager1")
				.build();
		
		if(userCart.getId() != null) {
			result = ResponseEntity.status(HttpStatus.OK).body(userCartService.update(userCart));
		}else {
			result = ResponseEntity.status(HttpStatus.OK).body(userCart);
		}
		
		return null;
	}
	
	@GetMapping("selectall")
	public ResponseEntity<?> selectAll(UserCart userCart){
		ResponseEntity<?> result = null;
		UserCartID cart2 = new UserCartID().builder()
							.item_code(5000008)
							.id("manager1")
							.build();
		
		
		
							
		
		
		return result;
	}
}
