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
//
//		file = new File(realPath + "basicman1.jpg"); // uploadImages 폴더에 화일존재 확인을 위함
//		if (!file.isFile()) { // 존재하지않는 경우
//			String basicImagePath = "C:\\MTest\\MyWork\\demoM\\src\\main\\webapp\\resources\\images\\basicman1.jpg";
//			FileInputStream fi = new FileInputStream(new File(basicImagePath));
//			// => basicImage 읽어 파일 입력바이트스트림 생성
//			FileOutputStream fo = new FileOutputStream(file);
//			// => 목적지 파일(realPath+"basicman1.jpg") 출력바이트스트림 생성
//			FileCopyUtils.copy(fi, fo);
//		}
//
//		// 1.4) 저장경로 완성
//		// => 기본 이미지 저장
//		String file1 = "", file2 = "basicman1.jpg";
//
//		MultipartFile uploadfilef = entity.getUploadfilef();
//		if (uploadfilef != null && !uploadfilef.isEmpty()) {
//			// => image_File 을 선택함
//			// 1.4.1) 물리적위치 저장 (file1)
//			file1 = realPath + uploadfilef.getOriginalFilename(); // 저장경로(relaPath+화일명) 완성
//			uploadfilef.transferTo(new File(file1)); // 해당경로에 저장(붙여넣기)
//
//			// 1.4.2) Table 저장경로 완성 (file2)
//			file2 = uploadfilef.getOriginalFilename();
//		}
//		// --------------------------------------------
//
//		entity.setUploadfile(file2);
//		// 2. Service & 결과
//		// => PasswordEncoder 적용
//		entity.setPassword(passwordEncoder.encode(entity.getPassword()));

		result = ResponseEntity.status(HttpStatus.OK).body(item_reviewService.insertItemReview(entity));
		return result;
	}
	
	@PostMapping("/replyUpdate")
	public ResponseEntity<?> replyUpdate(@RequestBody Item_reviewDTO dto) {
		ResponseEntity<?> result = null;
		System.out.println(dto);
		
		
		
		
		result = ResponseEntity.status(HttpStatus.OK).body(item_reviewService.insertItemReview(dto));
		return result;
	}
	

}
