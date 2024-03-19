package com.example.demo.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.ItemDTO;
import com.example.demo.domain.SortDTO;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;
import com.example.demo.service.ItemService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@CrossOrigin(origins = "http://localhost:3000")
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
		
		List<ItemDTO> list = itemService.selectItemWhereEvent(pageRequest);
		
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
		
		List<ItemDTO> list = itemService.selectItemWherebrand(pageRequest,searchRequest);
		System.out.println("\n\n"+keyword+list);
		if (list != null && list.size() > 0) {
			result = ResponseEntity.status(HttpStatus.OK).body(list);
			log.info("branditem check");
		} else {
			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("출력자료 없음");
			log.info("branditem check");
		}
		return result;
	}
//페이징 + 정렬 기능 되는 search
	@GetMapping("/search")
	public ResponseEntity<?> selectItemWhereSearchType( PageRequest pageRequest, SearchRequest searchRequest) {
		ResponseEntity<?> result = null;
		pageRequest.setSize(10);
		pageRequest.setStartEndNum(pageRequest.getCurrPage());
		// 1. 파라미터로 정렬하고자 하는 방법을 전달받는다.
		//SearchRequest searchRequest = new SearchRequest();
		//searchRequest.setSortType("파라미터");
		// 2. searchRequest 객체를 생성해서 담아주고
		
		log.info("\n"+pageRequest+"\n"+searchRequest);
		
		List<ItemDTO> list = itemService.selectItemWhereSearchType(pageRequest, searchRequest);
		if (list != null && list.size() > 0) {
			result = ResponseEntity.status(HttpStatus.OK).body(list);
			log.info("search check");
		} else {
			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("출력자료 없음");
			log.info("search check");
		}
		log.info(result);
		return result;
	}

	
//	@GetMapping("/search")
//	public ResponseEntity<?> selectItemWhereKeyword(@RequestParam("keyword") String keyword) {
//		ResponseEntity<?> result = null;
//		SearchRequest searchRequest = new SearchRequest(keyword);
//		
//		List<ItemDTO> list = itemService.selectItemWhereKeyword(searchRequest);
//		if (list != null && list.size() > 0) {
//			result = ResponseEntity.status(HttpStatus.OK).body(list);
//			log.info("search check");
//		} else {
//			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("출력자료 없음");
//			log.info("search check");
//		}
//		return result;
//	}
	
	@GetMapping("/searchsort")
	public ResponseEntity<?> selectSortWhereKeyword(@RequestParam("keyword") String keyword) {
		ResponseEntity<?> result = null;
		SearchRequest searchRequest = new SearchRequest(keyword);
		
		List<SortDTO> list = itemService.selectSortWhereKeyword(searchRequest);
		log.info("\naaaaaaaaa\n"+list+"\n\n");
		if (list != null && list.size() > 0) {
			result = ResponseEntity.status(HttpStatus.OK).body(list);
			log.info("searchsort check");
		} else {
			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("출력자료 없음");
			log.info("searchsort check");
		}
		return result;
	}
	
	@GetMapping("/sort")
	public ResponseEntity<?> selectSortList( ) {
		ResponseEntity<?> result = null;
		List<SortDTO> list = itemService.selectSortList();
		System.out.println(list);
		if (list != null && list.size() > 0) {
			result = ResponseEntity.status(HttpStatus.OK).body(list);
			log.info("sort check");
		} else {
			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("출력자료 없음");
			log.info("sort check");
		}
		return result;
	}
	
	/* 🎃🎃🎃🎃🎃🎃 검수 전 🎃🎃🎃🎃🎃🎃 */


	@GetMapping("/detail")
	public ResponseEntity<?> selectItemWhereCode(@RequestParam("code") String keyword){
		ResponseEntity<?> result = null;
		
		SearchRequest searchRequest = new SearchRequest(keyword);
		ItemDTO dto = itemService.selectItemWhereCode(searchRequest);
		System.out.println(dto);
		if(dto != null) {
			result = ResponseEntity.status(HttpStatus.OK).body(dto);
			log.info("search check");
		} else {
			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("출력자료 없음");
			log.info("search check");
		}
		
		return result;
		
	}
	
	@GetMapping("/allitem")
	public ResponseEntity<?> selectAll() {
		ResponseEntity<?> result = null;
		List<ItemDTO> itemList = itemService.selectAll();
		
		if(itemList != null && itemList.size() > 0) {
			result = ResponseEntity.status(HttpStatus.OK).body(itemList);
			log.info("출력한다");
		} else {
			result = ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("출력자료 없음");
			log.info("데이터 못찾겠다");
		}
		
		return result;
	}
	


}
	
	
