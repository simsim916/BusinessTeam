package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Item_review;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;

public interface Item_reviewService {

	
	List<Item_review> selectItemReviewList(PageRequest pageRequest, SearchRequest searchRequest);
	
	
}
