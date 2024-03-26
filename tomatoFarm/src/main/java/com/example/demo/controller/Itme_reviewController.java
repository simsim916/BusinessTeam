package com.example.demo.controller;

import java.io.File;
import java.io.FileInputStream;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.domain.Item_reviewDTO;
import com.example.demo.entity.Item_review;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;
import com.example.demo.service.Item_reviewService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@CrossOrigin(origins = "http://localhost:3000")
@Log4j2
@AllArgsConstructor
@RestController
@RequestMapping(value = "/itemreview")
public class Itme_reviewController {
	private final Item_reviewService item_reviewService;

	@GetMapping("/select")
	public ResponseEntity<?> selectItem_reviewList(PageRequest pageRequest, SearchRequest searchRequest) {
		ResponseEntity<?> result = null;

		List<Item_review> list = item_reviewService.selectItemRevieListIntegerWhereType(pageRequest, searchRequest);
		result = ResponseEntity.status(HttpStatus.OK).body(list);
		return result;
	}

	@PostMapping("/iteminsert")
	public ResponseEntity<?> iteminsert(HttpServletRequest request, @RequestBody Item_review entity) {
		ResponseEntity<?> result = null;
		System.out.println(entity);

		String realPath = request.getRealPath("/");
		log.info("\n\n\n** realPath => " + realPath);
		File file = new File(realPath);
		if (!file.exists()) {
			// => 저장폴더가 존재하지 않는경우 만들어줌
			file.mkdir();
		}

		result = ResponseEntity.status(HttpStatus.OK).body(item_reviewService.updateReview(entity));
		return result;
	}
	
	@PostMapping("/replyUpdate")
	public ResponseEntity<?> replyUpdate(@RequestBody Item_review entity) {
		ResponseEntity<?> result = null;
		System.out.println(entity);
		result = ResponseEntity.status(HttpStatus.OK).body(item_reviewService.updateReview(entity));
		return result;
	}
	

}
