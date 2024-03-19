package com.example.demo.module;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

//** JPA Paging & Sort
		// => https://bnzn2426.tistory.com/135

		// ** PageList 요청 처리 DTO
		// => 재사용 가능 구조: 다양한 Table에 적용가능
		// => JPA 에서 사용하는 Pageable Type 객체 생성을 목표로함.

@Builder
@AllArgsConstructor
@Getter
@Setter
public class PageRequest {
	
	private int page; // 출력페이지
	private int size; // 1page 당 출력 row 갯수

	
	public PageRequest() {
		this.page=1;
		this.size=5;
	}
	
	
	
}
