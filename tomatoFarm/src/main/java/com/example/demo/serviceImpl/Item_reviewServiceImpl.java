package com.example.demo.serviceImpl;


import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Item_review;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;
import com.example.demo.repository.Item_reviewRepository;
import com.example.demo.service.Item_reviewService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@AllArgsConstructor
@Service
public class Item_reviewServiceImpl implements Item_reviewService{
	
	private final Item_reviewRepository item_reviewRepository;
	
	@Override
	public List<Item_review> selectItemReviewList(PageRequest pageRequest, SearchRequest searchRequest) {
		
		List<Item_review> result = item_reviewRepository.selectItemReviewList(pageRequest, searchRequest);
		
		return result;
	}

	
	
	
	
	
}
	
