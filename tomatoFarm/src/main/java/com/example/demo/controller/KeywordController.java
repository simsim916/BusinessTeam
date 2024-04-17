package com.example.demo.controller;

import com.example.demo.entity.Keyword;
import com.example.demo.entity.User;
import com.example.demo.service.EmailService;
import com.example.demo.service.KeywordService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;

@RestController
@RequestMapping("/keyword")
@RequiredArgsConstructor
public class KeywordController {
    private final KeywordService keywordService;

	@GetMapping("/select")
	public ResponseEntity<?> select(Keyword	 entity, @AuthenticationPrincipal String userId){
		ResponseEntity<?> result = null;

		result = ResponseEntity.status(HttpStatus.OK).body(keywordService.selectall(entity, userId));

		return result;
	}

}
