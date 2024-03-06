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

@Repository
public interface ItemRepository {

	// ** sortb 조회
	List<Item> selectMealkitWhereEvent_D(PageRequest pageRequest);
	List<Item> selectItemWhereKeyword(PageRequest pageRequest, String keyword);
	/* 🎃🎃🎃🎃🎃🎃 검수 전 🎃🎃🎃🎃🎃🎃 */

}
