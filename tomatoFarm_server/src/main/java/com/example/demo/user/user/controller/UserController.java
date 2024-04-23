package com.example.demo.user.user.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.example.demo.user.user.domain.SignForm;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

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
	public ResponseEntity<?> singup(@RequestBody SignForm signForm) {
		ResponseEntity<?> result = null;
		userService.signup(signForm);
		result = ResponseEntity.status(HttpStatus.OK).body("signUp_successed");
		return result;

	}@GetMapping("/checkid")
	public ResponseEntity<?> checkid(@RequestParam String id) {
		ResponseEntity<?> result = null;
		if (userService.checkID(id))
			result = ResponseEntity.status(HttpStatus.OK).body("존재하는 아이디 입니다.");
		else
			result = ResponseEntity.status(HttpStatus.OK).body("OK");
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
		if (userService.saveAll(list).size() > 0)
			result = ResponseEntity.status(HttpStatus.OK)
					.body(userService.selectUserWhere(new SearchRequest("username", "")));
		else
			result = ResponseEntity.status(HttpStatus.OK).body("데이터 입력 실패");

		return result;
	}

}
