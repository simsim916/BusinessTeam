package com.example.demo.controller;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Visit_page;
import com.example.demo.entity.Visit_pageID;
import com.example.demo.module.SearchRequest;
import com.example.demo.service.VisitService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/visit")
public class VisitController {
	
	VisitService visitService;

	
	@Transactional
	@GetMapping("/update")
	public void update(@RequestParam("page")String page) {
		ZoneId koreaZone = ZoneId.of("Asia/Seoul");
		ZonedDateTime currentDateTimeInKorea = ZonedDateTime.now(koreaZone);
		LocalDate currentDateInKorea = currentDateTimeInKorea.toLocalDate();
		
		Visit_pageID visit_pageID 
			= new Visit_pageID().builder()
				.page(page)
				.visit_date(currentDateInKorea)
				.build();
		
		Visit_page visitPage 
		= new Visit_page().builder().visit_pageID(visit_pageID).build();
		
		visitService.update(visitPage); 
	}
	
	@GetMapping("/selectall")
	public ResponseEntity<?> selectAll() {
		System.out.println("=====================");
		System.out.println("=====================");
		System.out.println("=====================");
		ResponseEntity result = null;
//		if (searchRequest.getHowManyDays() == null) {
////			List<Visit_page> list = visitService.selectAll(null)
//		} else {
//			
//		}
		List<Visit_page> list = visitService.selectAll();
//		for(Visit_page page : list) {
//			System.out.println(page);
//		}
//		
//		result = ResponseEntity.status(HttpStatus.OK).body("list"); 
//		
		return result;
	}
	
}
