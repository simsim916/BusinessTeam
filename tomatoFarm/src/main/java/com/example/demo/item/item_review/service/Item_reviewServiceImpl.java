package com.example.demo.item.item_review.service;


import java.time.LocalDateTime;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.example.demo.item.item_review.entity.Item_review;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;
import com.example.demo.item.item_review.repository.Item_reviewRepository;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@AllArgsConstructor
@Service
public class Item_reviewServiceImpl implements Item_reviewService{
	
	private final Item_reviewRepository item_reviewRepository;
	
	@Override
	//** 상품리뷰 조회
	public List<Item_review> selectItemRevieListStringWhereType(PageRequest pageRequest, SearchRequest searchRequest) {
		return item_reviewRepository.selectItemRevieListStringWhereType(pageRequest, searchRequest);
	}
	@Override
	//** 상품리뷰 조회
	public List<Item_review> selectItemRevieListIntegerWhereType(PageRequest pageRequest, SearchRequest searchRequest) {
		return item_reviewRepository.selectItemRevieListIntegerWhereType(pageRequest, searchRequest);
	}

	@Transactional
	@Override
	public Item_review updateReview(Item_review entity) {
		LocalDateTime currentDateTime = LocalDateTime.now();
		
		entity.setRegdate(currentDateTime);
		return item_reviewRepository.updateReview(entity);
	}
	
	
	
	
	
	
}
	
