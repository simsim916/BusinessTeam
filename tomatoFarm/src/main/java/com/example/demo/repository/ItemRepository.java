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
	
	// ** 동적 한 컬럼 검색
	List<ItemDTO> selectItemListStringWhereType(PageRequest pageRequest, SearchRequest searchRequest);
	List<ItemDTO> selectItemListIntegerWhereType(PageRequest pageRequest, SearchRequest searchRequest);
	
	// ** 이벤트 중인 상품 조회 시 사용
	List<ItemDTO> selectItemListStringWhereTypeNotNull(PageRequest pageRequest,SearchRequest searchRequest);
	
	// ** 키워드 상품 페이징 조회
	List<ItemDTO> selectItemWhereSearchType(PageRequest pageRequest, SearchRequest searchRequest);
	// ** 키워드 상품 단순 조회 -> 필터
	List<SortDTO> selectSortWhereKeyword(SearchRequest searchRequest);
	// ** 분류 검색 조회
	List<SortDTO> selectSortList();
	
	Item merge(Item entity);
	int persist(List<Item> list);
	
	// ** list에 있는 상품들 조회
	List<ItemDTO> selectItemListWhereInCode(List<Integer> codeList);
	
	
}
