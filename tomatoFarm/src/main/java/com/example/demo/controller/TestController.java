package com.example.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.TestDTO;
import com.example.demo.entity.UserCart;
import com.example.demo.service.ItemService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;




@Log4j2
@AllArgsConstructor
@RestController
@RequestMapping(value="/test")
public class TestController {
	
	ItemService itemService;

//	@PostMapping("/batchinsert")
//	public void batchInsert(List<Item> entity) {
//		System.out.println("entity => " +entity);
//		System.out.println("entity's SIZE => "+entity.size());
//		System.out.println("entity.get(0) =>" +entity.get(0));
//		
////		itemService.batchInsert(entity);
//	}


}
