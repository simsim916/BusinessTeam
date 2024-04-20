package com.example.demo.user.user_address.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.user.user_address.entity.UserAddress;
import com.example.demo.module.jwtToken.TokenProvider;
import com.example.demo.user.user_address.service.UserAddressService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/address")
public class UserAddressController {
	
	UserAddressService userAddressService;
	TokenProvider tokenProvider;
	
	@GetMapping("/select")
	public ResponseEntity<?> selectAddressWhereId(HttpServletRequest request) {
		ResponseEntity<?> result = null;
		String token = tokenProvider.parseBearerToken(request);
		String id = tokenProvider.validateAndGetUserId(token);
		List<UserAddress> list =  userAddressService.selectAddressWhereId(id);
		result = ResponseEntity.status(HttpStatus.OK).body(list);
		return result;
	}
	
	@PostMapping("/merge")
	public ResponseEntity<?> insertUserAddress(@RequestBody UserAddress entity, HttpServletRequest request) {
		ResponseEntity<?> result = null;
		String token = tokenProvider.parseBearerToken(request);
		String id = tokenProvider.validateAndGetUserId(token);
		entity.setUserId(id);
		userAddressService.insertUserAddress(entity);
		List<UserAddress> list =  userAddressService.selectAddressWhereId(id);
		result = ResponseEntity.status(HttpStatus.OK).body(list);
		return result;
	}
	
	
	@PostMapping("/delete")
	public ResponseEntity<?> deleteAddress(@RequestBody UserAddress entity, HttpServletRequest request) {
		ResponseEntity<?> result = null;
		String token = tokenProvider.parseBearerToken(request);
		String id = tokenProvider.validateAndGetUserId(token);
		entity.setUserId(id);
	
		System.out.println(entity);
		userAddressService.deleteAddress(entity);
		return result;
		
	}
}
