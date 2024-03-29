package com.example.demo.controller;


import java.util.List;

import javax.transaction.Transactional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.UserCart;
import com.example.demo.entity.UserCartID;
import com.example.demo.service.UserCartService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/usercart")
public class UserCartController {

	UserCartService userCartService;
	
	@Transactional
	@PostMapping("/update")
	public ResponseEntity<?> update(@RequestBody UserCart userCart) {
		ResponseEntity<?> result = null;
		// 자료를 서비스를 통해서 저장
		if(userCart.getId() != null) {
			result = ResponseEntity.status(HttpStatus.OK).body(userCartService.update(userCart));
		}else {
			result = ResponseEntity.status(HttpStatus.OK).body(userCart);
		}
		return result;
	}
	
	@GetMapping("selectall")
	public ResponseEntity<?> selectAll(UserCartID entity){
		ResponseEntity<?> result = null;

		List<UserCart> list = userCartService.selectAll(entity);
		return result;
	}
	
}
