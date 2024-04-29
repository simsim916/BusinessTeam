package com.example.demo.page.page_visit.controller;

import java.util.List;

import javax.transaction.Transactional;

import com.example.demo.page.page_visit.domain.PageVisitCNTDTO;
import com.example.demo.page.page_visit.entity.PageVisit;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.module.SearchRequest;
import com.example.demo.page.page_visit.service.PageVisitService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/visit")
public class VisitController {
	
	PageVisitService pageVisitService;
	
	@GetMapping("/update")
	public void update(PageVisit entity) {
		pageVisitService.update(entity);
	}

	@PostMapping("/select")
	public ResponseEntity<?> select(@RequestBody SearchRequest searchRequest) {
		ResponseEntity<?> result = null;
		List<PageVisitCNTDTO> list = pageVisitService.select(searchRequest);
		result=ResponseEntity.ok(list);
		return result;
	}

	@GetMapping("/selectwhere")
	public ResponseEntity<?> selectWhere(SearchRequest searchRequest) {
		ResponseEntity result = null;
		
		List<PageVisit> list = pageVisitService.selectWhere(searchRequest);
		result = ResponseEntity.status(HttpStatus.OK).body(list);
		return result;
	}
	
}
