package com.example.demo.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.example.demo.domain.ItemDTO;
import com.example.demo.domain.SortDTO;
import com.example.demo.entity.Item;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;

@Repository
public interface ItemRepository {

	// ** 이벤트 상품 조회
	List<ItemDTO> selectItemWhereEvent(PageRequest pageRequest);
	// ** 브랜드 상품 조회 
	List<ItemDTO> selectItemWherebrand(PageRequest pageRequest, SearchRequest searchRequest);
	// ** 키워드 상품 페이징 조회
	List<ItemDTO> selectItemWhereSearchType(PageRequest pageRequest, SearchRequest searchRequest);
	// ** 키워드 상품 단순 조회
	List<ItemDTO> selectItemWhereKeyword(SearchRequest searchRequest);
	// ** 키워드 상품 단순 조회 -> 필터
	List<SortDTO> selectSortWhereKeyword(SearchRequest searchRequest);
	// ** 코드로 상품 조회
	ItemDTO selectItemWhereCode(SearchRequest searchRequest);
	// ** 분류 검색 조회
	List<SortDTO> selectSortList();
	/* 🎃🎃🎃🎃🎃🎃 검수 전 🎃🎃🎃🎃🎃🎃 */
	
	int batchInsert(List<Item> entity);
	List<ItemDTO> selectAll();
}
