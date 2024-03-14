package com.example.demo.controller;



import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.ItemDTO;
import com.example.demo.domain.UserDTO;
import com.example.demo.entity.Item;
import com.example.demo.entity.User;
import com.example.demo.service.UserService;

import lombok.AllArgsConstructor;


@RestController
@AllArgsConstructor
@RequestMapping(value="/user")
public class UserController {
	
	UserService userService;
	PasswordEncoder passwordEncoder;
	
	/* 🎃🎃🎃🎃🎃🎃 검수 전 🎃🎃🎃🎃🎃🎃 */
	

	@PostMapping("/login") 
	public ResponseEntity<?> login(HttpServletRequest request,UserDTO dto) {
		ResponseEntity<?> result = null;
		String password = dto.getPassword(); // user가 입력한 password를 변수에 저장
		System.out.println(passwordEncoder.encode(dto.getPassword()));
		User user = userService.selectUser(dto); // user가 입력한 id로 userData를 조회 하여 dto를 채운다.
		if(dto.getName() != null) { // 조회성공
			if(passwordEncoder.matches(password, user.getPassword())) {
				result = ResponseEntity.status(HttpStatus.OK).body(user);
			}else {
				result = ResponseEntity.status(HttpStatus.OK).body("Password_uncorrected");
			}
		}else { // 조회실패
			result = ResponseEntity.status(HttpStatus.OK).body("ID_uncorrected");
		}
		
		return result;
	}
	
	@PostMapping("/signup")
	public ResponseEntity<?> singup(UserDTO dto) {
		ResponseEntity<?> result = null;
		
		String password = dto.getPassword();
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		
		dto.setPassword(encoder.encode(password));
		
		if(userService.insertUser(dto)>0) {
			result = ResponseEntity.status(HttpStatus.OK).body("signUp_successed");
		}else {
			result = ResponseEntity.status(HttpStatus.OK).body("signUp_failed");
		}
		return result;	
		
		
	}
	
	
	
	
	
	
}
