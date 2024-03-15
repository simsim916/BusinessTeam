package com.example.demo.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.example.demo.entity.Item_review;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;

@Repository
public interface Item_reviewRepository {

	List<Item_review> selectItemReviewList(PageRequest pageRequest , SearchRequest searchRequest);
	

}
