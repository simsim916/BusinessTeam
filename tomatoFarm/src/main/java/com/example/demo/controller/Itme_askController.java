package com.example.demo.controller;

import java.sql.Date;
import java.time.LocalDateTime;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.example.demo.domain.Item_askDTO;
import com.example.demo.entity.Item_ask;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;
import com.example.demo.service.Item_askService;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@CrossOrigin(origins = "http://localhost:3000")
@Log4j2
@AllArgsConstructor
@RestController
@RequestMapping(value="/itemask")
public class Itme_askController {
	private final Item_askService item_askService;
	PasswordEncoder passwordEncoder;
	
	@GetMapping("/select")
	public ResponseEntity<?> selectItem_askList(PageRequest pageRequest, SearchRequest searchRequest){
		ResponseEntity<?> result = null;
		System.out.println(searchRequest);
		List<Item_ask> list = item_askService.selectItemAskListIntegerWhereType(pageRequest, searchRequest);
		result = ResponseEntity.status(HttpStatus.OK).body(list.size() > 0 ? list : null);
		return result;
	}
	
	@Transactional
	@PostMapping("/update")
	public ResponseEntity<?>askinsert(@RequestBody Item_ask entity){
		ResponseEntity<?> result = null;
		if(entity.getPassword() != null) {
			String password = entity.getPassword();
			BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
			entity.setPassword(encoder.encode(password));
			result = ResponseEntity.status(HttpStatus.OK).body(item_askService.updateAsk(entity));
		} else {
			result = ResponseEntity.status(HttpStatus.OK).body(item_askService.updateAsk(entity));
		}
		return result;
	}
	
	// 비밀번호 확인하는 매서드
	
	/*
	 * 1. 엔티티에 리퀘스트바디 자료 바인딩
	 * 2. seq로 일치하는 데이터 1개 조회
	 * 3. 비밀번호 인코더(클래스) 매치(매서드) 이용해서 비밀번호 일치하는지 확인
	 * 4. 비밀번호 일치하면 -> 신호만
	 * 5. 일치하면 오픈 실패하면 catch 
	 * 
	 */
	@PostMapping("/askpassword")
	public ResponseEntity<?>askpassword(@RequestBody Item_askDTO dto){
		ResponseEntity<?> result = null;
		if(dto.getPassword() != null) {
			String password = dto.getPassword();
			BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
			dto.setPassword(encoder.encode(password));
		}
		
		
		return result;
	}
	
}
	
	
