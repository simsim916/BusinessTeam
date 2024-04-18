package com.example.demo.item.item_review.repository;

import static com.example.demo.item.item_review.entity.QItem_review.item_review;

import java.util.List;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import com.example.demo.item.item_review.entity.Item_review;
import org.springframework.stereotype.Repository;

import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.AllArgsConstructor;


@Repository
@AllArgsConstructor
public class Item_reviewRepositoryImpl implements Item_reviewRepository {
	
	private final JPAQueryFactory jPAQueryFactory;
	private final EntityManager entityManager;
	
	@Override
	public List<Item_review> selectItemRevieListStringWhereType(PageRequest pageRequest, SearchRequest searchRequest) {
		return jPAQueryFactory
				.selectFrom(item_review)
				.where(Expressions.stringPath(searchRequest.getColumn()).contains(searchRequest.getKeyword()))
				.limit(pageRequest.getEndNum()).offset(pageRequest.getStartNum())
				.fetch();
	}
	@Override
	public List<Item_review> selectItemRevieListIntegerWhereType(PageRequest pageRequest, SearchRequest searchRequest) {
		return jPAQueryFactory
				.selectFrom(item_review)
				.where(Expressions.numberPath(Integer.class,searchRequest.getColumn()).stringValue().eq(searchRequest.getKeyword()))
				.orderBy(item_review.regdate.desc())
				.limit(pageRequest.getEndNum()).offset(pageRequest.getStartNum())
				.fetch();
	}
	
	@Override
	@Transactional
	public Item_review updateReview(Item_review entity) {
		return entityManager.merge(entity);
	}
	

	
	
	
}
