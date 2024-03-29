package com.example.demo.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.UserDTO;
import com.example.demo.entity.User;
import com.example.demo.service.UserService;

import lombok.AllArgsConstructor;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@AllArgsConstructor
@RequestMapping(value="/user")
public class UserController {
	
	UserService userService;
	PasswordEncoder passwordEncoder;
	
	/* 🎃🎃🎃🎃🎃🎃 검수 전 🎃🎃🎃🎃🎃🎃 */
	

	@PostMapping("/login") 
	public ResponseEntity<?> login(@RequestBody UserDTO dto) {
		ResponseEntity<?> result = null;
		String password = dto.getPassword(); // user가 입력한 password를 변수에 저장
		User user = userService.selectUser(dto); // user가 입력한 id로 userData를 조회 하여 dto를 채운다.
		if(dto.getUsername() != null) { // 조회성공
			if(passwordEncoder.matches(password, user.getPassword())) {
				result = ResponseEntity.status(HttpStatus.OK).body(dto);
			}else {
				result = ResponseEntity.status(HttpStatus.OK).body("Password_uncorrected");
			}
		}else { // 조회실패
			result = ResponseEntity.status(HttpStatus.OK).body("ID_uncorrected");
		}
		
		return result;
	}
	
	
	@PostMapping("/signup")
	public ResponseEntity<?> singup(@RequestBody User entity) {
		ResponseEntity<?> result = null;
		
		String password = entity.getPassword();
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		
		entity.setPassword(encoder.encode(password));
		
		if(userService.updateUser(entity) != null) {
			result = ResponseEntity.status(HttpStatus.OK).body("signUp_successed");
		}else {
			result = ResponseEntity.status(HttpStatus.OK).body("signUp_failed");
		}
		return result;	
	}
	
	
}
