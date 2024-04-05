package com.example.demo.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.ChatBot;
import com.example.demo.entity.User;
import com.example.demo.jwtToken.TokenProvider;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;
import com.example.demo.service.ChatBotService;
import com.example.demo.service.UserService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping(value = "/chatbot")
public class ChatBotController {

	ChatBotService chatBotService;
	TokenProvider tokenProvider;
	UserService userService;

	@PostMapping("/insert")
	public ResponseEntity<?> save(HttpServletRequest request, @RequestBody ChatBot chatbot) {
		ResponseEntity<?> result = null;
		String token = tokenProvider.parseBearerToken(request);
		String id = tokenProvider.validateAndGetUserId(token);
		chatbot.setWriter(id);
		chatbot = chatBotService.save(chatbot);
		if (chatbot != null) {
			List<ChatBot> list = chatBotService.selectAllFromRoot(chatbot);
			result = ResponseEntity.status(HttpStatus.OK).body(list);
		} else {
			result = ResponseEntity.status(HttpStatus.OK).body("insert failed");
		}
		return result;
	}

	@GetMapping("/select")
	public ResponseEntity<?> selectAllFromRoot(ChatBot chatbot) {
		ResponseEntity<?> result = null;
		List<ChatBot> list = chatBotService.selectAllFromRoot(chatbot);
		if (list != null && list.size() > 0) {
			result = ResponseEntity.status(HttpStatus.OK).body(list);
		} else {
			result = ResponseEntity.status(HttpStatus.OK).body("insert failed");
		}
		return result;
	}

	@GetMapping("/selectroot")
	public ResponseEntity<?> selectroot(HttpServletRequest request, PageRequest pageRequest,
			SearchRequest searchRequest) {
		ResponseEntity<?> result = null;
		String token = tokenProvider.parseBearerToken(request);
		String id = tokenProvider.validateAndGetUserId(token);
		User dto = User.builder().id(id).build();
		dto = userService.selectUser(dto);

		if (dto.getLevel() <= 2) {
			result = ResponseEntity.status(HttpStatus.OK)
					.body(chatBotService.selectRootList(pageRequest, searchRequest));
		} else {
			result = ResponseEntity.status(HttpStatus.FORBIDDEN).body(null);
		}

		return result;

	}
}
