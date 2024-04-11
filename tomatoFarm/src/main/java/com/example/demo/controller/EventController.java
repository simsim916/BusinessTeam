package com.example.demo.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.item_event;
import com.example.demo.module.SearchRequest;
import com.example.demo.service.Item_eventService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/event")
public class EventController {

	Item_eventService item_eventService;  
	
	@GetMapping("/eventlist")
	public ResponseEntity<?> selectEventWhere(SearchRequest searchRequest) {
		ResponseEntity<?> result = null;
		List<item_event> list = null;
		
		if(searchRequest.getKeyword().matches("^[0-9]*$")) {
			list = item_eventService.selectEventWhereNumber(searchRequest);
		} else {
			list = item_eventService.selectEventWhereString(searchRequest);
		}
		
		result = ResponseEntity.status(HttpStatus.OK).body(list);
		return result;
	}
	
	@PostMapping("/merge")
	public ResponseEntity<?> merge(List<item_event> list) {
		ResponseEntity<?> result = null;
		List<item_event> mergedlist = null;
		
		mergedlist = item_eventService.merge(list);
		
		result = ResponseEntity.status(HttpStatus.OK).body(mergedlist);
		
		return result;
	}
}
