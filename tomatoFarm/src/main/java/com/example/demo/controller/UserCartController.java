package com.example.demo.controller;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.UserCartDTO;
import com.example.demo.entity.Item;
import com.example.demo.entity.UserCart;
import com.example.demo.entity.UserCartID;
import com.example.demo.jwtToken.TokenProvider;
import com.example.demo.service.UserCartService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/usercart")
public class UserCartController {

	UserCartService userCartService;
	TokenProvider tokenProvider;

	@Transactional
	@PostMapping("/merge")
	public ResponseEntity<?> merge(@RequestBody List<UserCart> list, HttpServletRequest request) {
		ResponseEntity<?> result = null;
		String token = tokenProvider.parseBearerToken(request);
		String id = tokenProvider.validateAndGetUserId(token);
		System.out.println(id);
		for ( UserCart e : list)
			e.setId(id);
			
		// 자료를 서비스를 통해서 저장
		if (list!=null && list.size()>0) {
			userCartService.merge(list);
			result = ResponseEntity.status(HttpStatus.OK).body("merge Success");
		} else {
			result = ResponseEntity.status(HttpStatus.OK).body("merge Failed");
		}
		return result;
	}

	@GetMapping("/select")
	public ResponseEntity<?> select(UserCart entity){
		ResponseEntity<?> result = null;
		
		List<UserCartDTO> list = userCartService.selectItemListWhereUserID(entity);
		
		if(list!=null && list.size()>0)
			result = ResponseEntity.status(HttpStatus.OK).body(list);
		else
			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(null);
			
		return result;
	}

}
