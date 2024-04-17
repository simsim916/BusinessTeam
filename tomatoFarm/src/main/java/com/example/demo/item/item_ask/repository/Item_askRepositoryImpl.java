package com.example.demo.item.item_ask.repository;

import static com.example.demo.entity.QItem_ask.item_ask;
import static com.example.demo.entity.QItem.item;


import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import com.example.demo.item.item_ask.domain.Item_askDTO;
import com.example.demo.item.item_ask.entity.Item_ask;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.AllArgsConstructor;


@Repository
@AllArgsConstructor
public class Item_askRepositoryImpl implements Item_askRepository{
	
	private final JPAQueryFactory jPAQueryFactory;
	private final EntityManager entityManager;

	@Override
	// ** 상품 리뷰 조회
	public List<Item_askDTO> selectItemAskListStringWhereType(PageRequest pageRequest, SearchRequest searchRequest) {
		return jPAQueryFactory
				.select(Projections.bean(Item_askDTO.class, item_ask.seq, item_ask.item_code, item_ask.writer, item_ask.title, 
						item_ask.type, item_ask.contents, item_ask.password, item_ask.reply, item_ask.reply_writer, item_ask.regdate, item_ask.secret,
						item.name.as("item_name")))
				.from(item_ask).leftJoin(item).on(item_ask.item_code.eq(item.code))
				.where(Expressions.stringPath(searchRequest.getColumn()).contains(searchRequest.getKeyword()))
				.orderBy(item_ask.regdate.desc())
				.limit(pageRequest.getEndNum()).offset(pageRequest.getStartNum())
				.fetch();
	}
	
	@Override
	public List<Item_askDTO> selectItemAskListIntegerWhereType(PageRequest pageRequest, SearchRequest searchRequest) {
		return jPAQueryFactory
				.select(Projections.bean(Item_askDTO.class, item_ask.seq, item_ask.item_code, item_ask.writer, item_ask.title, 
						item_ask.type, item_ask.contents, item_ask.password, item_ask.reply, item_ask.reply_writer, item_ask.regdate, item_ask.secret,
						item.name.as("item_name")))
				.from(item_ask).leftJoin(item).on(item_ask.item_code.eq(item.code))
				.where(Expressions.numberPath(Integer.class,searchRequest.getColumn()).stringValue().eq(searchRequest.getKeyword()))
				.orderBy(item_ask.regdate.desc())
				.limit(pageRequest.getEndNum()).offset(pageRequest.getStartNum())
				.fetch();
	}
	
	@Override
	public Item_ask merge(Item_ask entity) {
		return entityManager.merge(entity);
	}

	
}
