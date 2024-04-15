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
	
//	===========================================================================================
	List<ItemDTO> SearchForItemListString(PageRequest pageRequest,SearchRequest searchRequest);
	List<ItemDTO> SearchForItemListInteger(PageRequest pageRequest,SearchRequest searchRequest);
//	===========================================================================================
	// ** 동적 한 컬럼 검색
	List<ItemDTO> selectItemWhereCode(PageRequest pageRequest,SearchRequest searchRequest);
	
	List<ItemDTO> selectItemListStringWhereTypeNotNull(PageRequest pageRequest,SearchRequest searchRequest);
	
	
	// ** 브랜드 상품 조회 
	List<ItemDTO> selectItemWherebrand(PageRequest pageRequest, SearchRequest searchRequest);
	// ** 키워드 상품 페이징 조회
	List<ItemDTO> selectItemWhereSearchType(PageRequest pageRequest, SearchRequest searchRequest);
	// ** 키워드 상품 단순 조회 -> 필터
	List<SortDTO> selectSortWhereKeyword(SearchRequest searchRequest);
	// ** 분류 검색 조회
	List<SortDTO> selectSortList();
	
	void insertItem(Item entity);
	// ** 관리자 페이지 상품 조회 및 페이징
	List<ItemDTO> selectAll(); // << 이걸 사용중이지만 동적검색으로 바꿔보자.
	List<ItemDTO> adminStringColumn(SearchRequest searchRequest,PageRequest pageRequest);
	List<ItemDTO> adminIntegerColumn(SearchRequest searchRequest, PageRequest pageRequest);
	
	List<ItemDTO> selectItemListWhereInCode(List<Integer> codeList);
	
	
	/* 사용중이지 않은 메서드 */
//	Item selectItemIntegerWhereType(SearchRequest searchRequest);
	List<Item> merge(List<Item> list);
}
