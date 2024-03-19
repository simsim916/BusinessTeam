package com.example.demo.module;

import java.util.List;

import com.querydsl.core.types.dsl.NumberPath;
import com.querydsl.core.types.dsl.StringPath;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//** JPA Paging & Sort
		// => https://bnzn2426.tistory.com/135

		// ** PageList 요청 처리 DTO
		// => 재사용 가능 구조: 다양한 Table에 적용가능
		// => JPA 에서 사용하는 Pageable Type 객체 생성을 목표로함.

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class SearchRequest {
	
	private List<String> type; // 검색 옵션
	private String keyword; // 검색 키워드
	private String sortType;
	
	public SearchRequest(String keyword) {
		this.keyword=keyword;
	}
	public SearchRequest(String keyword, String sortType) {
		this.keyword=keyword;
		this.sortType=sortType;
	}
	
}
