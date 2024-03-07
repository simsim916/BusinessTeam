package com.example.demo.controller;

import java.util.List;

import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Item;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;
import com.example.demo.service.ItemService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@AllArgsConstructor
@RestController
@RequestMapping(value="/item")
public class ItemController {
	private final ItemService itemService;
	
	@GetMapping("/eventitem")
	public ResponseEntity<?> selectItemWhereEvent_D() {
		ResponseEntity<?> result = null;
		PageRequest pageRequest = new PageRequest(1,11);
		
		List<Item> list = itemService.selectItemWhereEvent_D(pageRequest);
		
		if (list != null && list.size() > 0) {
			result = ResponseEntity.status(HttpStatus.OK).body(list);
			log.info("eventitem check");
		} else {
			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("출력자료 없음");
			log.info("eventitem check");
		}
		return result;
	}
	
	@GetMapping("/branditem/{keyword}")
	public ResponseEntity<?> selectItemWherebrand(@PathVariable("keyword") String keyword) {
		ResponseEntity<?> result = null;
		PageRequest pageRequest = new PageRequest(1,6);
		SearchRequest searchRequest = new SearchRequest(keyword);
		
		List<Item> list = itemService.selectItemWherebrand(pageRequest,searchRequest);
		
		if (list != null && list.size() > 0) {
			result = ResponseEntity.status(HttpStatus.OK).body(list);
			log.info("branditem check");
		} else {
			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("출력자료 없음");
			log.info("branditem check");
		}
		return result;
	}

	@GetMapping("/search")
	public ResponseEntity<?> selectItemWhereSearchType( @Param("keyword") String keyword) {
		ResponseEntity<?> result = null;
		PageRequest pageRequest = new PageRequest(1,24);
		
		String[] type = {"sort3", "name", "brand"};
		SearchRequest searchRequest = new SearchRequest(type,keyword);
		
		List<Item> list = itemService.selectItemWhereSearchType(pageRequest, searchRequest);
		
		if (list != null && list.size() > 0) {
			result = ResponseEntity.status(HttpStatus.OK).body(list);
			log.info("search check");
		} else {
			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("출력자료 없음");
			log.info("search check");
		}
		return result;
	}

	
	/* 🎃🎃🎃🎃🎃🎃 검수 전 🎃🎃🎃🎃🎃🎃 */


	@GetMapping("/detail")
	public ResponseEntity<?> selectItemWhereCode(@Param("code") String keyword){
		ResponseEntity<?> result = null;
		
		SearchRequest searchRequest = new SearchRequest(keyword);
		
		Item entity = itemService.selectItemWhereCode(searchRequest);
		
		if(entity != null) {
			result = ResponseEntity.status(HttpStatus.OK).body(entity);
			log.info("search check");
		} else {
			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("출력자료 없음");
			log.info("search check");
		}
		
		return result;
		
	}
}
	
	
