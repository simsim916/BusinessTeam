package com.example.demo.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.ChatBot;
import com.example.demo.service.ChatBotService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping(value = "/chatbot")
public class ChatBotController {
	
	ChatBotService chatBotService;
	
	@PostMapping("/insert")
	public ResponseEntity<?> save(@RequestBody ChatBot chatbot){
		ResponseEntity<?> result = null;
		String token = "토근예시";
		String userId = "manager3";
		chatbot.setWriter(userId);
		chatbot=chatBotService.save(chatbot);
		if(chatbot != null) {
			List<ChatBot> list = chatBotService.selectAllFromRoot(chatbot);
			System.out.println(list);
			result = ResponseEntity.status(HttpStatus.OK).body(list);
		}else {
			result = ResponseEntity.status(HttpStatus.OK).body("insert failed");
		}
		return result;
	}

}
