package com.example.demo.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Item_ask;
import com.example.demo.entity.Item_review;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;
import com.example.demo.service.Item_askService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@AllArgsConstructor
@RestController
@RequestMapping(value="/itemask")
public class Itme_askController {
	private final Item_askService item_askService;
	
	@GetMapping("/select/{itemcode}")
	public ResponseEntity<?> selectItem_askList(@PathVariable("itemcode") String keyword){
		ResponseEntity<?> result = null;
		PageRequest pageRequest = new PageRequest(1,11);
		SearchRequest searchRequest = new SearchRequest(keyword);
		
		List<Item_ask> list = item_askService.selectItemAskList(pageRequest, searchRequest);
		
		if(list != null && list.size() > 0) {
			result = ResponseEntity.status(HttpStatus.OK).body(list);
		}else {
			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("출력할 자료가 없습니다");
		}
		return result;
	}
}
	
	
