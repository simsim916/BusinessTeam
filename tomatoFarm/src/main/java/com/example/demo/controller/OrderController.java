package com.example.demo.controller;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.ItemOrder;
import com.example.demo.entity.OrderDetail;
import com.example.demo.service.OrderService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/order")
@AllArgsConstructor
public class OrderController {

	OrderService orderService;
	
	@PostMapping("/test")
	public ItemOrder test(@RequestBody ItemOrder itemOrder ,OrderDetail orderDetail) {
		
		LocalDate now = LocalDateTime.now().plusHours(9).toLocalDate();
		itemOrder.setOrderDate(now);
//		================================================
//		itemOrder.setUserId("manager2");
//		itemOrder.setUserId("manager2");
//		================================================
		System.out.println(itemOrder);
//		System.out.println(orderDetail);
		// 내가 한 행동 (상품 디테일 페이지에서 구매하기 버튼 클릭)
		// item 정보 날려주기
		// order 엔티티에는 기본적인 아이템 정보만 들어있는 상태 (id,address,)
		// userId 를 세션스토리지? 에서 가져와서 넣어줘야겠지?
		// address 는 user_id 를 가져온다 OR 주문상세
		// 나머지 정보들도 user_id가 있어야 끌고올수있는 정보들..
		return null;
	}
}
