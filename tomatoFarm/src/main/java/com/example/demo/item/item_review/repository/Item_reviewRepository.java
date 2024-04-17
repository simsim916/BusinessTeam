package com.example.demo.item_review.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.example.demo.item_review.entity.Item_review;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;

@Repository
public interface Item_reviewRepository {

	List<Item_review> selectItemRevieListStringWhereType(PageRequest pageRequest , SearchRequest searchRequest);
	List<Item_review> selectItemRevieListIntegerWhereType(PageRequest pageRequest , SearchRequest searchRequest);
	
	
	Item_review updateReview(Item_review entity);
	
}
