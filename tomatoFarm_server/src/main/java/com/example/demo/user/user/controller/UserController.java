package com.example.demo.user.user.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.example.demo.user.user.domain.SignForm;
import com.example.demo.user.user.domain.UserDTO;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.example.demo.user.user.entity.User;
import com.example.demo.item.item.service.ItemService;
import com.example.demo.module.SearchRequest;
import com.example.demo.user.user.service.UserService;

import lombok.AllArgsConstructor;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@AllArgsConstructor
@RequestMapping(value = "/user")
public class UserController {

	UserService userService;

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

	}

	@GetMapping("/checkid")
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
					.body(userService.selectUserWhere(new SearchRequest("id", "")));
		else
			result = ResponseEntity.status(HttpStatus.OK).body("데이터 입력 실패");

		return result;
	}

	@GetMapping("/delete")
	public ResponseEntity<?> delete(@AuthenticationPrincipal String userId) {
		ResponseEntity<?> result = null;
		UserDTO dto = userService.selectUserWhere(new SearchRequest("id", userId)).get(0);
//		userService.delete(dto);
//		try {
//			result = ResponseEntity.status(HttpStatus.OK).body("다음에 뵙겠습니다.");
//		} catch (Exception e) {
//			result = ResponseEntity.status(HttpStatus.OK).body("다시 시도해주세요.");
//		}
		return result;
	}

	@PostMapping("/modify")
	public ResponseEntity<?> changeUserInfo(@RequestBody SignForm signForm) {
		ResponseEntity<?> result = null;
		User user = userService.merge(signForm);
		try {
			result = ResponseEntity.status(HttpStatus.OK).body("수정 성공 ! 재로그인 하세요.");
		} catch (Exception e) {
			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("다시 시도하세요");

		}
		return result;
	}
	
	@PostMapping("/checkpw")
	public ResponseEntity<?> checkPassword(@RequestBody User user, @AuthenticationPrincipal String userId) {
		ResponseEntity<?> result = null;
		boolean test = userService.checkPassword(user.getPassword(), userId);
		result = ResponseEntity.status(HttpStatus.OK).body(test);
		return result;
	}
	

}
