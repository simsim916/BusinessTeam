package com.example.demo.controller;

import javax.transaction.Transactional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.UserCart;
import com.example.demo.service.UserService;

@RestController
@RequestMapping("/usercart")
public class UserCartController {

	UserService userService;
	
	@Transactional
	@GetMapping("/update")
	public UserCart update(UserCart userCart) {
		
		return null;
	}
	
	@GetMapping("selectall")
	public ResponseEntity<?> selectAll(UserCart entity){
		ResponseEntity<?> result = null;
		
		return result;
	}
}
