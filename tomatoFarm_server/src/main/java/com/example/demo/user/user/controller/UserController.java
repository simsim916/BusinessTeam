package com.example.demo.user.user.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.user.user.entity.User;
import com.example.demo.module.SearchRequest;
import com.example.demo.user.user.service.UserService;

import lombok.AllArgsConstructor;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@AllArgsConstructor
@RequestMapping(value = "/user")
public class UserController {

	UserService userService;

	/* 🎃🎃🎃🎃🎃🎃 검수 전 🎃🎃🎃🎃🎃🎃 */

	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody User entity) {
		ResponseEntity<?> result = null;

		result = ResponseEntity.status(HttpStatus.OK).body(userService.selectUser(entity));
		return result;
	}

	@GetMapping("/admincheck")
	public ResponseEntity<?> admincheck(HttpServletRequest request, @AuthenticationPrincipal String userId) {
		ResponseEntity<?> result = null;

		result = ResponseEntity.status(HttpStatus.OK).body(userService.adminCheck(userId));

		return result;
	}

	@PostMapping("/signup")
	public ResponseEntity<?> singup(@RequestBody User entity) {
		ResponseEntity<?> result = null;
		String password = entity.getPassword();
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

		entity.setPassword(encoder.encode(password));

		if (userService.updateUser(entity) != null) {
			result = ResponseEntity.status(HttpStatus.OK).body("signUp_successed");
		} else {
			result = ResponseEntity.status(HttpStatus.OK).body("signUp_failed");
		}
		return result;
	}

	@GetMapping("/selectwhere")
	public ResponseEntity<?> selectUserWhere(SearchRequest searchRequest) {
		List<User> list = null;
		ResponseEntity<?> result = null;
		result = ResponseEntity.status(HttpStatus.OK).body(userService.selectUserWhere(searchRequest));
		return result;
	}

	@PostMapping("/merge")
	public ResponseEntity<?> merge(@RequestBody List<User> list) {
		ResponseEntity<?> result = null;

		if (userService.insertTest(list).size() > 0)
			result = ResponseEntity.status(HttpStatus.OK)
					.body(userService.selectUserWhere(new SearchRequest("username", "")));
		else
			result = ResponseEntity.status(HttpStatus.OK).body("데이터 입력 실패");

		return result;
	}

}
