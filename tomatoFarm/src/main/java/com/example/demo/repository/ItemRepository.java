package com.example.demo.repository;

import java.util.List;
import java.util.function.Function;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.FluentQuery.FetchableFluentQuery;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Item;
import com.example.demo.entity.Sorttable;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;

@Repository
public interface ItemRepository {

	// ** 이벤트 상품 조회
	List<Item> selectItemWhereEvent_D(PageRequest pageRequest);
	// ** 브랜드 상품 조회 
	List<Item> selectItemWherebrand(PageRequest pageRequest, SearchRequest searchRequest);
	// ** 키워드 상품 조회
	List<Item> selectItemWhereSearchType(PageRequest pageRequest, SearchRequest searchRequest);
	/* 🎃🎃🎃🎃🎃🎃 검수 전 🎃🎃🎃🎃🎃🎃 */

}
