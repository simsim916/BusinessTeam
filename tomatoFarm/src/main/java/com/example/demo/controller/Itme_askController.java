package com.example.demo.controller;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Item_ask;
import com.example.demo.entity.Item_review;
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
	
	@GetMapping("/select")
	public ResponseEntity<?> selectItem_askList(PageRequest pageRequest, SearchRequest searchRequest){
		ResponseEntity<?> result = null;
		System.out.println(searchRequest);
		List<Item_ask> list = item_askService.selectItemAskListIntegerWhereType(pageRequest, searchRequest);
		result = ResponseEntity.status(HttpStatus.OK).body(list);
		return result;
	}
	
	@Transactional
	@PostMapping("/update")
	public void updateAsk(@RequestBody Item_ask entity) {
		if(item_askService.updateAsk(entity) != null) {
			System.out.println("업데이트 성공~~");
		} else {
			System.out.println("실패 ~~");
		}
	}
}
	
	
